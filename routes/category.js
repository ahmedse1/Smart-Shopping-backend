const express = require("express"),
  router = express.Router();

var addCategory = require("../controller/category/addCategory");
var getCategory = require("../controller/category/getCategory");
var deleteCategory = require("../controller/category/deleteCategory");
var updateCategory = require("../controller/category/updateCategory");

router.post("/addCategory", addCategory);

router.get("/:id", getCategory);
router.delete("/", deleteCategory);
router.put("/", updateCategory);

// router.get("/getAdmin/:id", getAdmin);

module.exports = router;
