const userSesionCheck= (req, res, next) => {

if(req.session.user){
    res.locals.user = req.session.user
    return next();
}
res.redirect('/');
}

module.exports = userSesionCheck;