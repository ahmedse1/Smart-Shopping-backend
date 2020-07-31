var { User } = require("../../models/user");

var userSignup = async (req, res, next) => {
  try {
    const { email, password, name, shopName, shopCategory } = req.body;

    var checkShopName = await User.findOne({ shopName });
    var checkEmail = await User.findOne({ email });
    if (checkShopName) {
      res.status(404).send({ message: "Shop Already Exists" });
    } else if (checkEmail) {
      res.status(404).send({ message: "Email Already Exists" });
    } else {
      var data = await new User({
        email: email.trim(),
        password: password.trim(),
        name,
        shopName,
        shopCategory,
        status: "pendingApproval",
      });
      var newUser = await data.save();
      if (newUser) {
        res.status(200).send(newUser);
      }
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = userSignup;
