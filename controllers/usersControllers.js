const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { User } = require("../db/database/models");

const usersControllers = {
  register: (req, res) => {
    return res.render("users/register");
  },

  procesoRegistro: async (req, res) => {
    try {
      const { nombre, apellido, email, contrasena } = req.body;
      await User.create({
        name: nombre.trim(),
        surname: apellido.trim(),
        email: email.trim(),
        password: bcrypt.hashSync(contrasena, 10),
        rolId: 2,
      });
      return res.redirect("/users/login");
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
      const user = await User.findOne({ where: { email } });
      if (!user || !bcrypt.compareSync(contrasena, user.password)) {
        const error = {
          password : {
            msg : "Credenciales invalidas",
          } 
        };
        return res.render("users/login", {
          error,
        });
      }

      const { id, name, rol } = user;
      req.session.user = {
        id,
        email,
        name,
        rol,
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

    try {
        const user = await User.findByPk(req.session.user.id)
        return res.render("users/profile",{
            user
        });

    } catch (error) {
        console.log(error);
        
    }
  },

  update : async (req,res) => {
    try {
        const { nombre, apellido, email } = req.body;

        User.update(
            {
                name: nombre.trim(),
                surname: apellido.trim(),
                email: email.trim(),
            },
            {
                where : {
                    id : req.session.user.id
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
};

module.exports = usersControllers;
