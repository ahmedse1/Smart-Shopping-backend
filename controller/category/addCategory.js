var { Category } = require("../../models/category");

var addCategory = async (req, res, next) => {
  try {
    const { name, id } = req.body;
    var data = await new Category({
      name,
      userId: id,
    });
    var newCategory = await data.save();
    if (newCategory) {
      res.status(200).send(newCategory);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = addCategory;
