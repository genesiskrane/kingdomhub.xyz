const mongoose = require("mongoose");

const App = new mongoose.model(
  "App",
  new mongoose.Schema({
    domain: String,
    registered: String,
    email: String,
    password: String,
  })
);

const Account = new mongoose.model(
  "Account",
  new mongoose.Schema({
    name: String,
    profileImage: String,
    displayImage: String,
  })
);

module.exports = {
  App,
  Account,
};
