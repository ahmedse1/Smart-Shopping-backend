var { Category } = require("../../models/category");

var deleteCategory = async (req, res, next) => {
  const { id } = req.query;
  console.log(req.query.id);
  try {
    var category = await Category.findOneAndDelete({ _id: id });
    if (!category) {
      throw Error("No Categories Found");
    } else {
      res.status(200).send();
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = deleteCategory;
