const mongoose = require("mongoose");

var QuestionSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true
    },
    answerindex: {
      type: Number,
      required: true
    },
    answers: [],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    }
  },

  { usePushEach: true }
);

var Question = mongoose.model("Question", QuestionSchema);
module.exports = { Question };
