const nose = require("../db/data");

const usersControllers = {
    login: function(req, res, next) {
        res.render("users/login",{title : 'ingreso de usuario'})
    },
    register: function(req, res, next) {
        res.render("users/register",{title : 'registro de usuario'})
}
,
index:(req, res) =>{
    res.render('index',{
        index: nose.index,
        carrito: nose.carrito,
        login :nose.login,
        register: nose.register,
    })
}
};

 module.exports = usersControllers;