const calculate = require("../util/calculate.js");

exports.compareMarginalErrors = (userInput, correctAnswer, errorRange) => {
    const diff = Math.abs(userInput - correctAnswer);
    return diff <= errorRange;
}

exports.getWelcome = (req, res) => {
    try {
        return res.status(200).json({ success: true, message: "hello world" });
    } catch (error) {
        next(error);
    }
};

exports.startGame = (req, res) => {
    try {
        calculate.game.startTime = new Date();
        return res.status(200).json({ startTime: calculate.game.startTime });
    } catch (error) {
        next(error);
    }
};

exports.submitCoords = (req, res) => {
    try {
        const { character } = req.params;
        if (!calculate.game.characters.includes(character)) {
            return res.status(400).json({ message: "Invalid character" });
        }

        const { 
            coordsX,
            coordsY,
            naturalDimensionX,
            naturalDimensionY,
            userClientX,
            userClientY,
        } = req.body;

        const requestobj = {
            coordsX,
            coordsY,
            naturalDimensionX,
            naturalDimensionY,
            userClientX,
            userClientY,
        };

        const resultX = calculate.findX(requestobj);
        const resultY = calculate.findY(requestobj);
        const marginalX = calculate.game.marginalError.x;
        const marginalY = calculate.game.marginalError.y;

        let correctX;
        let correctY;
        if (character === "waldo") {
            correctX = calculate.game.waldo.coordinates.x;
            correctY = calculate.game.waldo.coordinates.y;
            if (this.compareMarginalErrors(resultX, correctX, marginalX) && this.compareMarginalErrors(resultY, correctY, marginalY)){
                return res.status(200).json({ message: "Correct" }); 
            } else {
                return res.status(200).json({ message: "Incorrect" });
            }
        } else if (character === "odlaw") {
            correctX = calculate.game.odlaw.coordinates.x;
            correctY = calculate.game.odlaw.coordinates.y;
            if (this.compareMarginalErrors(resultX, correctX, marginalX) && this.compareMarginalErrors(resultY, correctY, marginalY)){
                return res.status(200).json({ message: "Correct" }); 
            } else {
                return res.status(200).json({ message: "Incorrect" });
            }
        } else if(character === "wizard") {
            correctX = calculate.game.wizard.coordinates.x;
            correctY = calculate.game.wizard.coordinates.y;
            if (this.compareMarginalErrors(resultX, correctX, marginalX) && this.compareMarginalErrors(resultY, correctY, marginalY)){
                return res.status(200).json({ message: "Correct" }); 
            } else {
                return res.status(200).json({ message: "Incorrect" });
            }
        }
    } catch (error) {
        next(error)
    }
};