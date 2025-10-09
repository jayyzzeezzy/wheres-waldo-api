const { Router } = require("express");
const gameController = require("../controllers/gameControllers.js");

const gameRouter = Router();

gameRouter.get("/", gameController.getWelcome);
gameRouter.get("/game", gameController.startGame);
gameRouter.post("/game/:character", gameController.submitCoords);
gameRouter.get("/gameover", gameController.gameOver);

module.exports = gameRouter;