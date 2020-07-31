const mongoose = require("mongoose");

var CategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { usePushEach: true }
);

var Category = mongoose.model("Category", CategorySchema);
module.exports = { Category };
