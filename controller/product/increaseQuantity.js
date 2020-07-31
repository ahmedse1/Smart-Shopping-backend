var { Product } = require("../../models/product");

var increaseQuantity = async (req, res, next) => {
  const { id } = req.body.params;
  console.log(id);
  try {
    var product = await Product.findOneAndUpdate(
      { _id: id },
      {
        $inc: {
          quantity: 1,
        },
      }
    );
    if (!product) {
      throw Error("Not increased");
    } else {
      res.status(200).send();
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = increaseQuantity;
