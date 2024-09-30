import { renderTbl } from "./render.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHomeSizePts(houseSize) {
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

function start(HouseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(Number(HouseHoldMembers));
    const houseSizePTS = determineHomeSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push({
        houseM: HouseHoldMembers,
        houseS: houseSize,
        houseMPTS: houseHoldPTS,
        houseSPTS: houseSizePTS,
        cfpTotal: total
    });
}


// we used td before its declared. td is only defined inside the loop. after loop nothing is run
// Here’s what I tried it’s a very similar process to the last code. It looks right to me, but I’m not sure about the action row and what I should add there.


FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = FORM.housemembers.value;
    const houseSize = FORM.houses.value;
    start(houseMembers, houseSize);
    OUTPUT.innerHTML = "";
    //displayOutput();
    renderTbl(cfpData);
    FORM.reset();
})

