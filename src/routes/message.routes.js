const { Router } = require("express");

const { getMessages } = require("../controller/message.controller");
const { success } = require("../utils/network/response");

const routes = new Router();

// Add routes
routes.get("/", (req, res, next) => {
  getMessages()
    .then((msg) => success(req, res, msg))
    .catch((e) => {
      next(e);
    });
});
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
