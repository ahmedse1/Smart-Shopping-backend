var { User } = require("../../models/user");

var changePassword = async (req, res, next) => {
  try {
    const { password, id } = req.body;
    var user = await User.findOneAndUpdate({ _id: id }, { password: password });
    if (!user) {
      throw Error("No User Found");
    } else {
      res.status(200).send(user);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = changePassword;
