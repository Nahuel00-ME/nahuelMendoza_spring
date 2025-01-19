var express = require('express');
var router = express.Router();
const nose = require("../db/data");

router.get('/', function(req, res, next) {

  res.render('users/login', { title: 'ingreso' ,
    index: nose.index,
    carrito: nose.carrito,
    login :nose.login,
    register: nose.register,
  });
});



module.exports = router;
