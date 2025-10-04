const { Router } = require("express");
const gameController = require("../controllers/gameControllers.js");

const gameRouter = Router();

gameRouter.get("/", gameController.getWelcome);
gameRouter.post("/game", gameController.submitCoords);

module.exports = gameRouter;