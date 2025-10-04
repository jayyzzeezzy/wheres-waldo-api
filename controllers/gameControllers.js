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

exports.submitCoords = (req, res) => {
    try {
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
        const correctX = calculate.game.waldo.coordinates.x;
        const correctY = calculate.game.waldo.coordinates.y;
        const marginalX = 10;
        const marginalY = 30;

        if (this.compareMarginalErrors(resultX, correctX, marginalX) && this.compareMarginalErrors(resultY, correctY, marginalY)){
            return res.status(200).json({ message: "Correct" }); 
        } else {
            return res.status(200).json({ message: "Incorrect" });
        }
        
    } catch (error) {
        next(error)
    }
};