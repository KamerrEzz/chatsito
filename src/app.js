const express = require("express");
const app = express();

// routes
const indexRoutes = require('./routes/index.routes')

// Middleware Import
const bodyparser = require("body-parser");
const ErrorHander = require("./utils/middleware/error.middleware");

module.exports = (port) => {
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: false }));

  app.use("/", indexRoutes);

  app.use(ErrorHander.logErrors);
  app.use(ErrorHander.boomError);
  app.use(ErrorHander.defaultError);

  app.listen(port, () => {
    console.log(`listen ${port}`);
  });
};
