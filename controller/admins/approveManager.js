var { User } = require("../../models/user");

var getAdmin = async (req, res, next) => {
  const { id } = req.body;
  console.log(id, "iddddd");
  try {
    var result = await User.findOneAndUpdate({ _id: id }, req.body);
    if (!result) {
      res.status(400).send({ message: "Cannot Approve User" });
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = getAdmin;
