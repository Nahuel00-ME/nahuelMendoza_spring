var express = require('express');
var router = express.Router();
const { login, register,procesoRegistro, procesoLogin,profile,logout} = require("../controllers/usersControllers");
const check=require("../middelware/userSessionCheck");
const checkAdmin=require("../middelware/adminCheck");
router.get('/login' ,login);
router.post('/loginProceso', procesoLogin);

router.get('/register', register);
router.post('/register', procesoRegistro);

router.get('/profile/:id',check,checkAdmin,profile);
router.post ('/profile/:id',)
router.get('/logout',check,logout);


module.exports = router;
