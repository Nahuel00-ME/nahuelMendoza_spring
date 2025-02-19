const nose = require("../db/data");

const usersControllers = {
    login: function(req, res, next) {
        res.render("users/login",{title : 'ingreso de usuario'})
    },
    register: function(req, res, next) {
        res.render("users/register",{title : 'registro de usuario'})
}
};

 module.exports = usersControllers;