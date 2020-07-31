var { Category } = require("../../models/category");

var getCategory = async (req, res, next) => {
  try {
    var category = await Category.find({ userId: req.params.id });
    if (!category) {
      throw Error("No Categories Found");
    } else {
      res.status(200).send(category);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = getCategory;
