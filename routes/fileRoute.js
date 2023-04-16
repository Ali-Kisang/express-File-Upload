const express = require("express");
const upload = require("../utils/fileUpload");
const router = express.Router();
router.post("/fileupload", upload.fields([
    { name: "biodataPage", maxCount: 1 },
    { name: "passportCover", maxCount: 1 },
    { name: "passportPhoto", maxCount: 1 },
  ]), (req, res)=>{
    res.send("Photos uploaded successfully")
  });

  module.exports = router;