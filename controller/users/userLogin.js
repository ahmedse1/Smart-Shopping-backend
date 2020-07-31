var { User } = require("../../models/user");

var userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    var user = await User.findOne({ email, password });
    if (!user) {
      res.status(404).send({ message: "Username or password incorrect." });
    } else {
      if (user.status === "approved") {
        res.status(200).send(user);
      } else if (user.status === "pendingApproval") {
        res.status(404).send({ message: "Pending for Approval" });
      } else {
        res.status(404).send({ message: "rejected" });
      }
    }
  } catch (err) {
    res.status(404).send({ message: "Error" });
  }
};
module.exports = userLogin;
