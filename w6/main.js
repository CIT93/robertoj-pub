const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = []

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

function displayOutput() {
    for (obj of cfpData) {
        const newH2 = document.createElement("h2");
        newH2.textContent = `Cardon Footprint ${obj.cfpTotal}`;
        const newH3 = document.createElement("h3");
        newH3.textContent = 'Based on number in and size of home'
        const newP = document.createElement("p");
        newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS}),`;
        newP.textContent += ` and a ${obj.houseS} size of home (score:${obj.houseSPTS}).`;
        OUTPUT.appendChild(newH2);
        OUTPUT.appendChild(newH3);
        OUTPUT.appendChild(newP);
    }
}

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = FORM.housemembers.value;
    const houseSize = FORM.houses.value;

    start(houseMembers, houseSize);
    OUTPUT.innerHTML = "";
    displayOutput();
    FORM.reset();
})

