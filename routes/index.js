var express = require('express');
var router = express.Router();
const nose = require("../db/data");
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('home', { title: 'Sakumu' ,
    index: nose.index,
    carrito: nose.carrito,
    login :nose.login,
    register: nose.register,

  });
});


module.exports = router;
