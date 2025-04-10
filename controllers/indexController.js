const fs = require('fs');
const path = require('path');
const {readFile,readJson,saveJson } = require('../util/fileSystem');
const product = require("../db/sushi.json")



const indexController = {

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





};

module.exports = indexController;