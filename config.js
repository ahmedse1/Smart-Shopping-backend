var env = process.env.NODE_ENV || "develop-local";
var config = require("./config.json");
var envConfig = config[env];

Object.keys(envConfig).forEach(key => {
  process.env[key] = envConfig[key];
});
module.exports = {
  secret: "supersecret"
};
