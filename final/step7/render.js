import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";
import { cuisineMeals, cuisineCalories } from './cuisine.js';


const calculateTotalCalories = (cuisineType, selectedMeals) => {
    let totalCalories = 0;
    if (cuisineType && cuisineCalories[cuisineType]) {
        selectedMeals.forEach(meal => {
            totalCalories += cuisineCalories[cuisineType][meal] || 0;
        });
    }
    return totalCalories;
}

export const renderMealOptions = cuisineType => {
    const mealSelectionDiv = document.getElementById("mealSelection");
    const mealOptionsDiv = document.getElementById("mealOptions");
    mealOptionsDiv.innerHTML = "";

    if (!cuisineType || !cuisineMeals[cuisineType]) {
        mealSelectionDiv.style.display = "none";
        return;
    }

    mealSelectionDiv.style.display = "block";
    cuisineMeals[cuisineType].forEach((meal) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "mealSelection";
        checkbox.value = meal;

        const label = document.createElement("label");
        label.textContent = meal;

        const div = document.createElement("div");
        div.appendChild(checkbox);
        div.appendChild(label);

        mealOptionsDiv.appendChild(div);
    });
}

FORM.cuisineType.addEventListener("change", function () {
    renderMealOptions(FORM.cuisineType.value);
});


const renderTblHeading = () => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Dining Preference", "Cuisine Type", "Selected Meals", "Times Ate Out", "Is Tired", "Total Calories", "Actions"];
    headingTextArr.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

const onUpdate = (index, data) => {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
}

const renderTblBtn = (obj, index, data) => {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");

    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);

    btnDel.addEventListener('click', e => {
        onUpdate(index, data);
    });

    btnEdit.addEventListener('click', e => {
        FORM[1].value = obj.diningPreference;
        FORM[2].value = obj.cuisineType

        document.getElementById("mealSelection").style.display = "block";

        const mealOptionsContainer = document.getElementById("mealOptions");
        mealOptionsContainer.innerHTML = "";

        if (cuisineMeals[obj.cuisineType]) {
            cuisineMeals[obj.cuisineType].forEach(meal => {
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "mealSelection";
                checkbox.value = meal;
                checkbox.checked = obj.selectedMeals.includes(meal);

                const label = document.createElement("label");
                label.textContent = meal;

                const div = document.createElement("div");
                div.appendChild(checkbox);
                div.appendChild(label);

                mealOptionsContainer.appendChild(div);
            });
        }
        document.getElementById("timesAteOut").value = obj.timesAteOut;
        document.getElementById("isTired").checked = obj.isTired === "Yes";
    });

    return td;
}

const renderTblBody = (data, keys = null) => {
    const tbody = document.createElement("tbody");

    data.forEach((obj, index) => {
        const tr = document.createElement("tr");
        const objKeys = keys || Object.keys(obj).concat("totalCalories");
        objKeys.forEach(key => {
            const td = document.createElement("td");
            if (key === "totalCalories") {
                td.textContent = calculateTotalCalories(obj.cuisineType, obj.selectedMeals);
            } else {
                td.textContent = obj[key] || "";
            }
            tr.appendChild(td);
        });

        const td = renderTblBtn(obj, index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });

    return tbody;
};


const renderTbl = data => {
    TBL.innerHTML = "";
    if (data.length !== 0) {
        const table = renderTblHeading();
        const tbody = renderTblBody(data);
        table.appendChild(tbody);
        TBL.appendChild(table);
        renderMealOptions(data);
    }
}

export { renderTbl };