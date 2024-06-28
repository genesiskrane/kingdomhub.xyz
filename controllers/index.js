const { App, Account } = require("../db").models;

module.exports = {
  register: async (req, res) => {
    console.log("Registering App");

    const app = new App({
      domain: req.body.domain,
      email: req.body.email,
      password: req.body.password,
      registered: Date.now(),
    });
    await app.save();
    console.log("App Registered");
    res.send("Registered");
  },
  getApp: async (req, res) => {
    console.log(req.params.domain);
    let data = await App.find({
      domain: req.params.domain,
    });
    console.log(data.length);
    if (data.length == 0) res.send("Domain Not Found");
    else res.json(data[0]);
  },
};
