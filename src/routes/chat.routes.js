const { Router } = require("express");
const router = new Router();

const { addChat, listChat } = require("../controller/chat.controller");
const { success } = require("../utils/network/response");

router.get("/", (req, res, next) => {
  const id = req.params.id;
  listChat(id)
    .then((chat) => success(req, res, chat))
    .catch((e) => next(e));
});

router.post("/", (req, res, next) => {
    const users = req.body;
    addChat(users)
        .then((chat) => success(req, res, chat))
        .catch((e) => next(e));
});


module.exports = router;
