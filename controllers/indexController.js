const db = require('../db/database/models')

const indexController = {
  index: (req, res) => {
    return res.render("home");
  },

  admin: (req, res) => {
    res.render("admin");
  },

  admProductos: async (req, res) => {
   try {

      const [products, categories] = await Promise.all([
         db.Product.findAll({
            order : ['id'],
            include : ['category']
         }),
         db.Category.findAll()
      ])

      return res.render("partials/admProducto", {
         categories,
         products,
       });
      
   } catch (error) {
      console.log(error);
   }
  },

  admUsuarios: async (req, res) => {
    try {
      const users = await db.User.findAll({
        include : ['rol']
      })
      return res.render("partials/admUsers", {
        users,
      });
    } catch (error) {
      console.log(error);
      
    }

  },
};

module.exports = indexController;
