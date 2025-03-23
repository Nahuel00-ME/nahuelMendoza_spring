const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const { validationResult } = require("express-validator");
const {users}= require('../db/database/models')

const usersControllers = 
{
    register:(req, res)=> {
        return  res.render("users/register")
    },
    
    procesoRegistro : async (req,res) => {    
        
   try{
   const {nombre,apellido,email,contrasena} = req.body
   await User.create({ 
       id: uuidv4(),
       nombre : nombre.trim(),
       apellido : apellido.trim(),
       email : email.trim(),
       contrasena : bcrypt.hashSync(contrasena,10),
       imagen : imagen,
       rolId: 2
   })
   users.push(nuevoUsuario)
   return res.redirect('/users/login')}
catch(error){
    console.log(error)

}},

login:(req, res)=> {
 return  res.render("users/login")
},
procesoLogin :async (req,res) => {  
    const {email,contrasena} = req.body
    try{
    const user = await users.findOne({where: {email}});
     console.log(user)
    if (!user) {
        const error ={
            email : "credenciales invalidas"
        }
        return res.render('users/login', {
            error
        });
    }    
    const contrasenaValida = await bcrypt.compareSync(contrasena, user.contrasena);
    console.log(contrasenaValida)
    if (!contrasenaValida) {
        return res.render('users/login', {
          error: "Credenciales inválidas"
      });
  }
                         
     const { id, nombre, rol} = user 
        req.session.user = {
        id ,
        email,
        nombre,
        rol
      }

      res.locals.user={
        ...req.session.user
      }
      res.cookie("user",{ ...req.session.user },{maxAge:1000*60*60*24*90})
    
    return res.redirect("/")
}catch(error){
    console.log(error)
}
},

profile : (req,res) => {


return res.render("users/profile" , {
    product, categorias
})

},



logout :  async (req,res) => {try{
    
    req.session.destroy()
    res.clearCookie("user")
    return res.redirect("/")

}
catch(error){
    console.log(error)
}}}


 module.exports = usersControllers;