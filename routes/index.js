var express = require('express');
var router = express.Router();
const { index ,admProductos, admUsuarios} = require("../controllers/indexController");
/* GET home page. */
router.get('/', index);

router.get('/adm/products',admProductos)
router.get('/adm/users',admUsuarios)

module.exports = router;
