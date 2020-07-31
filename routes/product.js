const express = require("express"),
  router = express.Router();

var upload = require("../middleware/imageUpload");
var addProduct = require("../controller/product/addProduct");
var getProducts = require("../controller/product/getProducts");
var deleteProduct = require("../controller/product/deleteProduct");
const increaseQuantity = require("../controller/product/increaseQuantity");

router.post("/", addProduct);
router.get("/:id", getProducts);
router.delete("/", deleteProduct);
router.put("/", increaseQuantity);

router.post("/images", upload.any(), (req, res) => {
  let results = req.files.map((file) => {
    return {
      mediaName: file.filename,
      origMediaName: file.originalname,
      mediaSource: `http://${req.headers.host}/images/${file.filename}`,
    };
  });
  res.status(200).json(results);
});

module.exports = router;
