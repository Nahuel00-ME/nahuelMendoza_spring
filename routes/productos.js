var express = require('express');
var router = express.Router();
const { products, crear ,detalle,agregar,editar,update,borrar}= require("../controllers/productsControllers"); 

//productos
router.get('/', products);
router.get ('/detalle/:id',detalle)
router.get ('/productCrear',agregar)
router.post('/create',crear );  //falta hacer
router.get ('/editar/:id',editar) //falta hacer
router.put ('/update/:id',update)  //falta hacer
router.delete ('/borrar/:id',borrar) //falta hacer
 


  module.exports = router ;