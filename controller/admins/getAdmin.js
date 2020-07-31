var { Admin } = require("../../models/admin");

var getAdmin = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { email, password } = req.body;
    var user = await Admin.findOne({ _id: id });
    if (!user) {
      throw Error("No Admin Found");
    } else {
      res.status(200).send(user);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
module.exports = getAdmin;
