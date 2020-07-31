var { User } = require("../../models/user");

var getUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { email, password } = req.body;
    var user = await User.findOne({ _id: id });
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
module.exports = getUser;
