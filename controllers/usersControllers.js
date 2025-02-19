const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const {readFile,readJson,saveJson } = require('../util/fileSystem');
const { validationResult } = require("express-validator");
const product = require("../db/sushi.json");
const categorias = require("../db/categorias.json");


const usersControllers = 
{
    register:(req, res)=> {
        return  res.render("users/register")
    },
    
    procesoRegistro : (req,res) => {    
        
   const users = readJson('../db/users.json')
   const {nombre,apellido,email,contrasena} = req.body
   const nuevoUsuario = {
       id: uuidv4(),
       nombre : nombre.trim(),
       apellido : apellido.trim(),
       email : email.trim(),
       contrasena : bcrypt.hashSync(contrasena,10),
       imagen : "default-image.png"
   }
   users.push(nuevoUsuario)
   saveJson('../db/users.json',users)
   return res.redirect('/users/login')

},

login:(req, res)=> {
 return  res.render("users/login")
},
procesoLogin : (req,res) => {
   
    const users = readJson('../db/users.json')
    const {email,contrasena} = req.body

    //bcrypt.compareSync
    const user = users.find(u => u.email === email &&  u.contrasena===contrasena)
    console.log("user",user)
            if(!user){
                return res.render('users/login',{
                  error : "Credenciales inválidas"
                })
              }
             
     const { id, nombre, rol} = user 
        req.session.user = {
        id ,
        nombre,
        rol
      }

      res.locals.user={
        ...req.session.user
      }
      res.cookie("user",{ ...req.session.user },{maxAge:1000*60*60*24*90})
    
    return res.redirect("/")
},

profile : (req,res) => {


return res.render("users/profile" , {
    product, categorias
})

},

logout : (req,res) => {
    req.session.destroy()
    res.clearCookie("user")
    return res.redirect("/")
},
}
 module.exports = usersControllers;