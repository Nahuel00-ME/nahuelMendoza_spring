var express = require('express');
var router = express.Router();
const   {login, register,procesoRegistro, procesoLogin,profile,logout, update, remove} = require("../controllers/usersControllers");
const check=require("../middlewares/userSessionCheck");
const   uploadUser = require("../middlewares/uploadUser");
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');



router.get('/register', register);
router.post('/register',registerValidator ,procesoRegistro);

router.get('/login' ,login);
router.post('/loginProceso',loginValidator, procesoLogin);
router.get('/logout',check,logout);

router.get('/profile',check,profile);
router.put('/profile/:id',uploadUser.single('avatar'),check,update);
router.delete('/profile/:id',check, remove);


module.exports = router;
