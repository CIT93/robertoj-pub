import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";


renderTbl(cfpData);

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

FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

const determineRecycleItems = e => {
    const numberChecked = document.querySelectorAll('.recycle:checked').length;
    return {
        glass: e.target.glass.checked,
        plastic: e.target.plastic.checked,
        paper: e.target.paper.checked,
        aluminum: e.target.aluminum.checked,
        steel: e.target.steel.checked,
        food: e.target.food.checked,
        recyclePoints: (24 - (numberChecked * 4))
    }
}

FORM.addEventListener('submit', e => {
    e.preventDefault();
    if (FNAME.value !== '' && LNAME.value !== '') {
        SUBMIT.textContent = '';
        const fpObj = new FP(
            FNAME.value,
            LNAME.value,
            parseInt(e.target.housem.value),
            e.target.houses.value,
            e.target.foodc.value,
            e.target.foodsource.value,
            e.target.washingmachine.value,
            e.target.dishwasher.value,
            e.target.householdpurchases.value,
            e.target.garbagecans.value,
            determineRecycleItems(e),
            e.target.personalvehicle.value,
            e.target.publictransportation.value,
            e.target.flights.value
        );
        cfpData.push(fpObj);
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset();
    } else {
        SUBMIT.textContent = "Form requires first name and last name";
    }
});



