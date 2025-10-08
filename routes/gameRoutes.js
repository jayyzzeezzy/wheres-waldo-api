const { Router } = require("express");
const gameController = require("../controllers/gameControllers.js");

const gameRouter = Router();

gameRouter.get("/", gameController.getWelcome);
gameRouter.post("/game", gameController.startGame);
gameRouter.post("/game/:character", gameController.submitCoords);

module.exports = gameRouter;