var express = require('express');
var router = express.Router();
const { login, register,procesoRegistro, procesoLogin,profile,logout, update} = require("../controllers/usersControllers");
const check=require("../middlewares/userSessionCheck");
const checkAdmin=require("../middlewares/adminCheck");
router.get('/login' ,login);
router.post('/loginProceso', procesoLogin);

router.get('/register', register);
router.post('/register', procesoRegistro);

router.get('/profile',check,profile);
router.post ('/profile',update)
router.get('/logout',check,logout);


module.exports = router;
