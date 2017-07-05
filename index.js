/**
 * Returns informarion about triangle
 * @param {number} lengthA.
 * @param {number} lengthB.
 * @param {number} lengthC.
 * @return {object} triangle type informaton (scalene, equilateral, isosceles).
 */
 function getTriangleInfo(lengthA, lengthB, lengthC) {
    if(lengthA === undefined || lengthB === undefined || lengthC === undefined){
        throw new getTriangleInfo.NotEnoughArgumentsError;
    }

    var edgeLengths = [lengthA, lengthB, lengthC];

    // check input types
    edgeLengths.forEach(edgeLength => {
        if(typeof edgeLength != 'number'){
            throw new getTriangleInfo.WrongArgumentTypeError;
        }

        // if one of edges length is zero - all 3 points in one line. This is not a triangle
        if(edgeLength == 0){
            throw new getTriangleInfo.ZeroNumberError;
        }

        if(edgeLength < 0){
            throw new getTriangleInfo.NegativeNumberError;
        }
    })

    // sorting edge lengths from biggest to smallest
    edgeLengths.sort((a,b) => a-b).reverse();

    // triangle edges must be connected. So we check this is possible.
    // if sum of 2 smallest edge lengths is smaller than bigger one - we cant connect them
    if(edgeLengths[0] >= edgeLengths[1] + edgeLengths[2]){
        throw new getTriangleInfo.WrongEdgeLenghtsError;
    }

    var triangleInfo = {};

    if(edgeLengths[0] == edgeLengths[1] || edgeLengths[1] == edgeLengths[2]){
        triangleInfo.isosceles = true;
    }

    if(edgeLengths[0] == edgeLengths[2]){
        triangleInfo.equilateral = true;
    }

    if(!triangleInfo.isosceles && !triangleInfo.equilateral){
        triangleInfo.scalene = true;
    }

    return triangleInfo;
}

getTriangleInfo.NotEnoughArgumentsError = function() {};
getTriangleInfo.WrongArgumentTypeError = function() {};
getTriangleInfo.NegativeNumberError = function() {};
getTriangleInfo.ZeroNumberError = function() {};
getTriangleInfo.WrongEdgeLenghtsError = function() {};