var { Product } = require("../../models/product");

var deleteProduct = async (req, res, next) => {
  const { id } = req.query;
  try {
    var product = await Product.findOneAndDelete({ _id: id });
    if (!product) {
      throw Error("No Categories Found");
    } else {
      res.status(200).send();
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = deleteProduct;
