const { Router } = require("express");
const boom = require('@hapi/boom')

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
routes.get('/', (req, res) => {
    res.send("hola")
});
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
