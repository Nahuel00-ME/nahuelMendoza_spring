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

  admUsuarios: (req, res) => {
    const users = readJson("../db/users.json");

    return res.render("partials/admUsers", {
      users,
    });
  },
};

module.exports = indexController;
