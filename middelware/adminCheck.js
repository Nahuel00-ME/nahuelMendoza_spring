
    const adminCheck = (req, res, next) => {
        if(req.session.user && req.session.user.rol == "admin"){
            return next();
        }
        return res.redirect('/')
    }; 
    

module.exports = adminCheck;