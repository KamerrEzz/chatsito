const { Router } = require("express");
const router = new Router();

const {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} = require("../controller/user.controller");
const { success,created } = require("../utils/network/response");

router.get("/", (req, res, next) => {
  const filterUser = req.query.name || null;
  getUsers(filterUser)
    .then((user) => success(req, res, user))
    .catch((e) => {
      next(e);
    });
});

router.post("/", (req, res, next) => {
  createUser(req.body)
    .then((user) => created(req, res, user))
    .catch((e) => next(e));
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  updateUser(id, req.body)
    .then((user) => success(req, res, user))
    .catch((e) => next(e));
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  deleteUser(id)
    .then((user) => success(req, res, user))
    .catch((e) => next(e));
});

module.exports = router;
