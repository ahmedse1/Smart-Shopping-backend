const mongoose = require("mongoose");

var AdminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { usePushEach: true }
);

var Admin = mongoose.model("Admin", AdminSchema);
module.exports = { Admin };
