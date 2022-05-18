const APP = require("./app");
const mongoose = require("mongoose");
const { mongodb } = require("./config");

mongoose
  .connect(mongodb)
  .then(() => console.log("mongoose conectado"))
  .catch(console.log);

APP(3000);
