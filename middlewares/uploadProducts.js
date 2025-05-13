const multer = require('multer');
const path = require('path');

const storageProducts = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
  })
  
  const uploadProducts = multer({ storage: storageProducts,
      limits: {
          fileSize: 1024 * 1024 * 10 
      },
      fileFilter: function(req, file, cb) {
          const extensionesValidas = ['jpg', 'jpeg', 'png', 'gif'];
          const extension = path.extname(file.originalname).toLowerCase().replace('.', '');
          if (extensionesValidas.includes(extension)) {
              cb(null, true);
          } else {
              cb(new Error('Tipo de archivo no permitido')); }}})

module.exports = uploadProducts;