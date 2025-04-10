<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const {readFile,readJson,saveJson } = require('../util/fileSystem');
const product = require("../db/sushi.json")


=======
const db = require('../db/database/models')
>>>>>>> 6b344dfae3b31c1d4029edbcecf822fbd7bf128d

const indexController = {
  index: (req, res) => {
    return res.render("home");
  },

<<<<<<< HEAD
index:(req, res) =>{
   return res.render("home") 
},

admin:(req,res)=>{
   
   res.render("admin" , {
      product
   })
},

admProductos :(req,res) => {

   
   return res.render("partials/admProducto", {
      product
   })
},

admUsuarios: (req,res) => {
   const users = readJson('../db/users.json')

   return res.render("partials/admUsers",{
      users
   })
},
=======
  admin: (req, res) => {
    res.render("admin");
  },
>>>>>>> 6b344dfae3b31c1d4029edbcecf822fbd7bf128d

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
