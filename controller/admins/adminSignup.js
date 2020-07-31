var { Admin } = require("../../models/admin");

var adminSignup = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    var data = await new Admin({
      email: email.trim(),
      password: password.trim(),
      name,
    });
    var newAdmin = await data.save();
    if (newAdmin) {
      res.status(200).send(newAdmin);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = adminSignup;
