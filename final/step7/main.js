import { renderTbl } from './render.js';
import { FORM } from './global.js';
import { saveLS, mrData } from './storage.js';
import { MR } from './mr.js';
import { renderMealOptions } from './render.js';

renderTbl(mrData);

FORM.cuisinetype.addEventListener('change', function () {
    renderMealOptions(FORM.cuisinetype.value);
});

FORM.addEventListener('submit', e => {
    e.preventDefault();

    const diningPreference = FORM.diningpreference.value;
    const cuisineType = FORM.cuisinetype.value;
    const timesAteOut = FORM.timesateout.value;
    const isTired = FORM.istired.checked ? "Yes" : "No";
    const selectedMeals = Array.from(document.querySelectorAll("input[name='mealSelection']:checked"))
        .map(checkbox => checkbox.value);

    const mrObj = new MR(
        diningPreference,
        cuisineType,
        selectedMeals,
        timesAteOut,
        isTired
    );

    mrData.push(mrObj);
    saveLS(mrData);
    renderTbl(mrData);
    FORM.reset();
});




