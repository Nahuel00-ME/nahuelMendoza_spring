
    const adminCheck = (req, res, next) => {
        console.log(req.session.user);
        
        if(req.session.user && req.session.user.rol == "1"){
            return next();
        }
        return res.redirect('/')
    }; 
    

module.exports = adminCheck;