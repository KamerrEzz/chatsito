const express = require("express");
const app = express();
const path = require("path");

// routes
const indexRoutes = require("./routes/index.routes");
const messageRoutes = require("./routes/message.routes");
const userRoutes = require("./routes/user.routes");

// Middleware Import
const bodyparser = require("body-parser");
const ErrorHander = require("./utils/middleware/error.middleware");

module.exports = (port) => {
  app.use(express.static(path.join(__dirname, "./public/")));
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: false }));

  app.use("/", indexRoutes);
  app.use("/message", messageRoutes);
  app.use("/user", userRoutes);

  app.use(ErrorHander.logErrors);
  app.use(ErrorHander.boomError);
  app.use(ErrorHander.defaultError);

  app.listen(port, () => {
    console.log(`listen ${port}`);
  });
};
