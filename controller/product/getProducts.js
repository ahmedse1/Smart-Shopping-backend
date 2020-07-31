var { Product } = require("../../models/product");

var getProducts = async (req, res, next) => {
  const { id } = req.params;

  try {
    var products = await Product.find({ userId: id }).populate("category");
    if (!products) {
      throw Error("No Products Found");
    } else {
      res.status(200).send(products);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = getProducts;
