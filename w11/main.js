import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT, FOOD_CHOICE } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

const start = (first, last, houseHoldMembers, houseSize, foodChoice) => {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const foodPTS = determineFoodPts(foodChoice);
    const total = houseHoldPTS + houseSizePTS + foodPTS;
    cfpData.push({
        firstName: first,
        lastName: last,
        houseM: houseHoldMembers,
        houseS: houseSize,
        foodChoice: foodChoice,
        houseMPTS: houseHoldPTS,
        houseSPTS: houseSizePTS,
        foodPTS: foodPTS, // Added food points
        cfpTotal: total,
    });
}

renderTbl(cfpData);

// Function to validate a single field
const validateField = event => {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);

    if (field === '') {
        fieldError.textContent = `${fieldId} is required`;
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove("invalid");
    }
}

// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

FORM.addEventListener('submit', e => {
    e.preventDefault();
    if (FNAME.value !== '' && LNAME.value !== '') {
        SUBMIT.textContent = '';

        const fpObj = new FP(
            FNAME.value,
            LNAME.value,
            parseInt(FORM.housem.value),
            FORM.houses.value,
            FORM.foodc.value
        );

        cfpData.push(fpObj);
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset();
    } else {
        SUBMIT.textContent = "Form requires first name and last name";
    }
});

