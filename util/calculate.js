exports.game = {
    waldo: {
        coordinates: { x: 1586, y: 595 },
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