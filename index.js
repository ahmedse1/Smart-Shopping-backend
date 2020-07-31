const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  PORT = process.env.PORT || 5000,
  userRoutes = require("./routes/users"),
  categoryRoutes = require("./routes/category"),
  productRoutes = require("./routes/product"),
  adminRoutes = require("./routes/admins");
var cors = require("cors");
var mongoose = require("mongoose");

require("./config.js");
mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/SmartShoppingBot", {
mongoose.connect("mongodb://localhost/QuizUp", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/admins", adminRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Quiz Up Api!!");
});
//////////////////////////////////////////////////// Redux Test Starts /////////////////////////////////////////////////

//////////////////////////////////////////////////// Redux Test Ends ////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log("SERVER IS LISTENING ON PORT", PORT);
});
