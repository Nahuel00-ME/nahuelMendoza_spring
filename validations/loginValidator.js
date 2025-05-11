const { check } = require("express-validator");
const  { User } = require("../db/database/models");
const { compareSync } = require("bcrypt");

const loginValidator = [
    check("email")
        .notEmpty().withMessage("El email es requerido").bail()
        .isEmail().withMessage("El email no es válido").bail(),
    check("contrasena")
        .notEmpty().withMessage("La contraseña es requerida").bail()
        .custom(async (value, { req }) => {
            try{
            const user = await User.findOne({ where: { email: req.body.email } })
                   if (!user || !compareSync(value, user.password)) {
                    return Promise.reject(
                      new Error("Las credenciales son inválidas")
                    );
                }
            }
          catch(error){
                console.log(error);       
                return Promise.reject(
                    new Error(error ? error.message : "Error al verificar las credenciales")
                );
            }})
        
]

module.exports = loginValidator