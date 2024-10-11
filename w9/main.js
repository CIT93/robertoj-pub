import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js"

function start(first, last, HouseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(HouseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push({
        firstName: first,
        lastName: last,
        houseM: HouseHoldMembers,
        houseS: houseSize,
        houseMPTS: houseHoldPTS,
        houseSPTS: houseSizePTS,
        cfpTotal: total
    });
}

renderTbl(cfpData);

FORM.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = FORM.firstname.value.trim(); // Gets the value of the first name input and removes any extra space in case some placed a space here
    const lastName = FORM.lastname.value.trim(); // same thing here as first name
    const houseMembers = parseInt(FORM.housemembers.value);
    const houseSize = FORM.houses.value;
    const outputDiv = document.getElementById('output');

    outputDiv.textContent = "";   // Clear previous error messages

    // Checks if first and last name are there
    if (!firstName || !lastName) { // checks if either the first or last name is missing
        outputDiv.textContent = "Please provide both first and last name."; // We need to display this error message
        outputDiv.setAttribute("id", "error-message"); // i wanted to apply a css style and i found this is a way around it.
        return; // stops the function if validation fails so the form won't submit.
    }

    // If it is valid proceed with the footprint calculation
    start(firstName, lastName, houseMembers, houseSize);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
});
