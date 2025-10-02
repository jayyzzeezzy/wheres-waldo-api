const { Router } = require("express");
const gameRouter = require("./gameRoutes.js");

const routes = Router();

routes.use(gameRouter);

module.exports = routes;