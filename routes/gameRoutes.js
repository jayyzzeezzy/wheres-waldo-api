const { Router } = require("express");

const gameRouter = Router();

gameRouter.get("/", (req, res) => {
    return res.status(200).json({ success: true, message: "hello world" });
});

module.exports = gameRouter;