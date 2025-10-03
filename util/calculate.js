exports.findX = (obj) => {
    const resultX = (obj.coordsX / obj.naturalDimensionX) * userClientX;
    return resultX;
}

exports.findY = (obj) => {
    const resultY = (obj.coordsY / obj.naturalDimensionY) * userClientY;
    return resultY;
}