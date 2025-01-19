var express = require('express');
var router = express.Router();
const nose = require("../db/data"); 



router.get('/', function(req, res, next) {

  res.render('productos/productos', { title: 'nuestros productos' ,
    index: nose.index,
    carrito: nose.carrito,
    login :nose.login,
    register: nose.register,
  });
});
  

  module.exports = router ;