const mongoose = require("mongoose");
const moment = require("moment");

var QuizSchema = mongoose.Schema(
  {
    totalMarks: {
      type: Number,
      required: true
    },
    obtainedMarks: {
      type: Number,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    },
    date: {
      type: String,
      required: true,
      default: moment(Date.now()).format("YYYY-MM-DD")
    }
  },

  { usePushEach: true }
);

var Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = { Quiz };
