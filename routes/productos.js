var express = require('express');
var router = express.Router();
const { products, crear ,detalle,agregar,editar,update,borrar}= require("../controllers/productsControllers"); 
const  uploadP  = require("../middlewares/uploadProducts");
const productValidation = require('../validations/productsValidator');

router.get ('/', products);
router.get ('/detalle/:id',detalle)
router.get ('/productCrear',agregar)
router.post('/create', uploadP.single('image'),productValidation, crear );  
router.get ('/editar/:id',editar) 
router.put ('/update/:id',uploadP.single('image'),productValidation,update)  
router.delete ('/borrar/:id',borrar) 
 


  module.exports = router ;