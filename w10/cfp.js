const determineHouseSizePts = function (houseSize) {
    let houseSizePTS = 0;
    if (houseSize === 'large') {
        houseSizePTS = 10;
    }
    else if (houseSize === 'medium') {
        houseSizePTS = 7;
    }
    else if (houseSize === 'small') {
        houseSizePTS = 4;
    }
    else if (houseSize === 'apartment') {
        houseSizePTS = 2;
    }
    return houseSizePTS
}

const determineHouseHoldPts = function (numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    }
    return houseHoldPoints
}

export { determineHouseHoldPts, determineHouseSizePts }