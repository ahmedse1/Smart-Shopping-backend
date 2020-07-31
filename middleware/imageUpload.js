var multer = require("multer");
var path = require("path");
var fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    fs.exists("public/images", (exists) => {
      if (!exists) {
        fs.mkdir("public/images", { recursive: true }, () => {
          callback(null, "./public/images");
        });
      } else {
        callback(null, "./public/images");
      }
    });
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + "_" + file.originalname);
  },
});

module.exports = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    console.log(req.files);

    var filetypes = /jpeg|jpg|png/;
    var mimetype = filetypes.test(file.mimetype);
    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: Only image files can be uploaded");
  },
  onError: function (err, next) {
    next(err);
  },
});
