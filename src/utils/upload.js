const multer = require('multer');
const path = require('path');

function multerMaker(destinationPath, allowedMimes, fileSize) {
  return multer({
    storage: multer.diskStorage({
      destination(req, file, cb) {
        cb(null, destinationPath);
      },
      filename: (req, file, cb) => {
        const name = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        cb(null, name);
      },
    }),
    fileFilter: (req, file, callback) => {
      if (!allowedMimes.includes(file.mimetype)) {
        callback(new Error('File type not allowed'), false);
      } else {
        callback(null, true);
      }
    },
    limits: { fileSize },
  });
}

module.exports = {
  productUpload: multerMaker('uploads/', ['application/x-zip-compressed', 'text/plain'], 5000000), // 5mb
  imageUpload: multerMaker('public/images/', ['image/png', 'image/jpg', 'image/jpeg'], 2000000), // 2mb
};
