const multer=require('multer');


const storageUser = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/users')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
  })
  
  const uploadUser = multer({ storage: storageUser })

module.exports = uploadUser;