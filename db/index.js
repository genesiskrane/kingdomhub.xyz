require("dotenv").config();
const mongoose = require("mongoose");
const models = require("./models");

async function init() {
  console.log("Connecting To Database");
  await mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGOPASSWORD}@cluster00001.ckfam1c.mongodb.net/server-1?retryWrites=true&w=majority&appName=Cluster00001`
  );
}

module.exports = {
  init,
  models,
};
