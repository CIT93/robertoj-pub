const cfpData = []

function determineHouseHoldPts(numberInHousehold) {
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

function determineHomeSizePts(homeSize) {
    let homeSizePTS = 0;
    if (homeSize === 'large') {
        homeSizePTS = 10;
    }
    else if (homeSize === 'medium') {
        homeSizePTS = 7;
    }
    else if (homeSize === 'small') {
        homeSizePTS = 4;
    }
    else if (homeSize === 'apartment') {
        homeSizePTS = 2;
    }
    return homeSizePTS
}

function start(HouseHoldMembers, homeSize) {
    const houseHoldPTS = determineHouseHoldPts(HouseHoldMembers);
    const homeSizePTS = determineHomeSizePts(homeSize);
    const total = houseHoldPTS + homeSizePTS;
    cfpData.push([HouseHoldMembers, homeSize, houseHoldPTS, homeSizePTS, total]);
}

function displayOutput {

}


// global scope

start(1, "small");
start(1, "medium");
start(1, "large");
start(1, "apartment");
start(2, "small");
start(2, "medium");
start(2, "large");
start(2, "apartment");
start(3, "small");
start(3, "medium");
start(3, "large");
start(3, "apartment");
start(4, "small");
start(4, "medium");
start(4, "large");
start(4, "apartment");
start(5, "small");
start(5, "medium");
start(5, "large");
start(5, "apartment");
start(6, "small");
start(6, "medium");
start(6, "large");
start(6, "apartment");
start(7, "small");
start(7, "medium");
start(7, "large");
start(7, "apartment");
// 28 times

displayOutput()
