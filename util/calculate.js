exports.game = {
    startTime: "",
    endTime: "",
    characters: ["waldo", "odlaw", "wizard"],
    marginalError: { x: 10, y: 35 },
    waldo: {
        coordinates: { x: 1586, y: 595 },
        found: false,
    },
    odlaw: {
        coordinates: { x: 274, y: 558 },
        found: false,
    },
    wizard: {
        coordinates: { x: 690, y: 558 },
        found: false,
    },
},

exports.findX = (obj) => {
    const resultX = (obj.coordsX / obj.userClientX) * obj.naturalDimensionX;
    return resultX;
}

exports.findY = (obj) => {
    const resultY = (obj.coordsY / obj.userClientY) * obj.naturalDimensionY;
    return resultY;
}