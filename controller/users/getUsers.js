var { User } = require("../../models/user");

var getUsers = async (req, res, next) => {
  try {
    var user = await User.find({});
    if (!user) {
      throw Error("No Users Found");
    } else {
      res.status(200).send(user);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = getUsers;
