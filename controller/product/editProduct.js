var { Product } = require("../../models/product");

var editProduct = async (req, res, next) => {
  console.log(req.body);
  try {
    const { question, answerindex, answers, activeCategoryId } = req.body;
    var data = await new Product(req.body);
    //findById mongoose code here
    var newProduct = await data.save();
    if (newProduct) {
      res.status(200).send(newProduct);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = editProduct;
