const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { User } = require("../db/database/models");

const usersControllers = {

  register: (req, res) => {
    return res.render("users/register");
  },

  procesoRegistro: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (errors.isEmpty()) {

        const { nombre, apellido, email, contrasena } = req.body;
        await User.create({
          name: nombre.trim(),
          surname: apellido.trim(),
          email: email.trim(),
          password: bcrypt.hashSync(contrasena, 10),
          rolId: 2,
          image: "predeterminada.jpg"
        });
        return res.redirect("/users/login");
      } else {
        return res.render("users/register", {
          errores: errors.mapped(),
          old: req.body,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },

  login: (req, res) => {
    return res.render("users/login");
  },
  procesoLogin: async (req, res) => {
    const { email, contrasena } = req.body;

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render("users/login", {
          errores: errors.mapped()
        })}

        const user = await User.findOne({ where: { email } });

        console.log("login user", user);

        const { id, name, rolId } = user;
        req.session.user = {
          id,
          email,
          name,
          rol: rolId,
        };

        res.locals.user = {
          ...req.session.user,
        };
        res.cookie(
          "user",
          { ...req.session.user },
          { maxAge: 1000 * 60 * 60 * 24 * 90 }
        );

        return res.redirect("/");
      } catch (error) {
        console.log(error);
      }
    },

  profile: async (req, res) => {
    console.log("profile", req.session.user);

    try {
      const user = await User.findByPk(req.session.user.id, {
        include: [
          { association: 'rol' },
          // { association: 'address'}
        ]
      })

      return res.render('users/profile', {
        user
      })
    } catch (error) {
      console.log(error);

      return res.status(500).render('error', {
        message: error.message,
      })
    }
  },

  update: async (req, res) => {
    try {
      const { nombre, apellido, email } = req.body;
        image = req.file ? req.file.filename : req.session.user.image;
      User.update(
        {
          name: nombre.trim(),
          surname: apellido.trim(),
          email: email.trim(),
          image
        },
        {
          where: {
            id: req.session.user.id
          }
        }
      )
      return res.redirect('/users/profile')

    } catch (error) {
      console.log(error);

    }

  },

  logout: async (req, res) => {
    try {
      req.session.destroy();
      res.clearCookie("user");
      return res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },

  remove: async (req, res) => {
    try {
           req.session.destroy();
      res.clearCookie("user");
      const id = req.params.id;
      await User.destroy({ where: { id } });

      return res.redirect('/admin/users')
    } catch (error) {
      return res.status(500).render('error', {
        message: error.message,
      })
    }
  }
};

module.exports = usersControllers;
