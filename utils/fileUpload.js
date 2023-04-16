const multer = require("multer");

// Define the storage location and filename for each file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "biodataPage") {
      cb(null, "uploads");
    } else if (file.fieldname === "passportCover") {
      cb(null, "uploads");
    } else if (file.fieldname === "passportPhoto") {
      cb(null, "uploads");
    } else {
      cb(new Error("Invalid field name"), null);
    }
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Initialize the multer middleware with the defined storage configuration
const upload = multer({ storage: storage });

module.exports = upload;