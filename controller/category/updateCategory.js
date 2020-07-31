var { Category } = require("../../models/category");

var updateCategory = async (req, res, next) => {
  console.log(req.body);
  try {
    const { id } = req.body;
    var result = await Category.findOneAndUpdate({ _id: id }, req.body);
    if (!result) {
      throw Error("Cannot Update");
    } else {
      res.status(200).send();
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = updateCategory;
