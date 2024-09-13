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

function displayOutObj(obj) {
    console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Cardon Footprint ${obj.cfpTotal}`;
    output.appendChild(newH2);
}

function start(HouseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(HouseHoldMembers);
    const houseSizePTS = determineHomeSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push({
        HouseM: HouseHoldMembers,
        houseS: houseSize,
        houseMPTS: houseHoldPTS,
        homeSPTS: houseSizePTS,
        cfpTotal: total
    });
}


function displayOutput() {
    for (obj of cfpData) {
        console.log(obj)
        const output = document.getElementById("output");
        const newH2 = document.createElement("h2");
        newH2.textContent = `Cardon Footprint ${obj.cfpTotal}`;
//         const newH3 = document.createElement("h3");
//         newH3.textContent = 'Based on number in and size of home'
//         const newP = document.createElement("p");
//         newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`;
//         newP.textContent += ` and a ${arr[1]} size of home (score:${arr[2]}).`;
        output.appendChild(newH2);
//         output.appendChild(newH3);
//         output.appendChild(newP);
    }
}


// function displayOutput() {
//     for (let i = 0; i < cfpData.length; i++) {
//    const output = document.getElementById("output");
//         const arr = cfpData[i];
//         const newH2 = document.createElement("h2");
//         newH2.textContent = `Cardon Footprint ${arr[4]}`;
//         const newH3 = document.createElement("h3");
//         newH3.textContent = 'Based on number in and size of home';
//         const newP = document.createElement("p");
//         newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`;
//         newP.textContent += ` and a ${arr[1]} size of home (score: ${arr[2]}).`;
//         output.appendChild(newH2);
//         output.appendChild(newH3);
//         output.appendChild(newP);
//     }
// }

// global scope

start(1, "medium");
start(1, "large");
// start(1, "apartment");
// start(2, "small");
// start(3, "medium");
// start(4, "apartment");
// start(5, "apartment");
// start(6, "large");
// start(7, "small");

console.log(cfpData);

displayOutput();