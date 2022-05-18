const { Router } = require("express");

const {
  getMessages,
  addMessage,
  updateMessage,
  deleteMessage,
} = require("../controller/message.controller");
const { success } = require("../utils/network/response");

const routes = new Router();

// Add routes
routes.get("/", (req, res, next) => {
  const filterMessage = req.query.user || null;
  getMessages(filterMessage)
    .then((msg) => success(req, res, msg))
    .catch((e) => {
      next(e);
    });
});
routes.post("/", (req, res, next) => {
  addMessage(req.body)
    .then((msg) => success(req, res, msg))
    .catch((e) => next(e));
});
routes.put("/:id", (req, res, next) => {
  const id = req.params.id;
  updateMessage(id, req.body)
    .then((msg) => success(req, res, msg))
    .catch((e) => next(e));
});
routes.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  deleteMessage(id)
    .then((msg) => success(req, res, msg))
    .catch((e) => next(e));
});

module.exports = routes;
