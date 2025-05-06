var express = require('express');
var router = express.Router();
const { index ,admProductos, admUsuarios} = require("../controllers/indexController");
const checkAdmin = require("../middlewares/adminCheck");




router.get('/', index);
router.get('/adm/products',checkAdmin,admProductos)
router.get('/adm/users',checkAdmin, admUsuarios)

module.exports = router;
