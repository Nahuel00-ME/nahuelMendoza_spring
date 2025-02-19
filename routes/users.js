var express = require('express');
var router = express.Router();
const { login, register,procesoRegistro, procesoLogin,profile,logout} = require("../controllers/usersControllers");
const loginVerify = require("../middelware/loginValidator");
const check=require("../middelware/userSessionCheck");

router.get('/login' ,login);
router.post('/loginProceso', procesoLogin);

router.get('/register', register);
router.post('/register', procesoRegistro);

router.get('/profile/:id',check,profile);
router.get('/logout',check,logout)

module.exports = router;
