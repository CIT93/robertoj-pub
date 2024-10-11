import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js"; // This will Import a function to save data to local storage (saveLS) and elements from global variables (FORM and TBL).

function renderTblHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
    headingTextArr.forEach(function (text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
}

function onUpdate(index, data) { // Doing this will be removing an entry from the data array and updates local storage and re-renders the table
    data.splice(index, 1); // This will be removing the item at the specified index from the array
    saveLS(data); // This will save the updated data to local storage using saveLS
    renderTbl(data); // Re-renders the table with the updated data
}

function renderTblBtn(obj, index, data) {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', function (e) {
        onUpdate(index, data); // When the "Delete" button is clicked this removes the item from the array and updates the table
    })
    btnEdit.addEventListener('click', function (e) {
        FORM[1].value = obj.firstName;
        FORM[2].value = obj.lastName;
        FORM[3].value = obj.houseM;
        FORM[4].value = obj.houseS;
        onUpdate(index, data); // Doing this hellps remove the old data entry before editing to replace it with new input
    })
    return td;
}

function renderTblBody(data) {
    const tbody = document.createElement("tbody")
    data.forEach(function (obj, index) {
        const tr = document.createElement("tr");
        for (const [key, value] of Object.entries(obj)) {
            if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            }
        }
        const td = renderTblBtn(obj, index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
}

function renderTbl(data) {
    TBL.innerHTML = "";
    if (data.length !== 0) {
        const table = renderTblHeading();
        const tbody = renderTblBody(data);
        table.appendChild(tbody);
        TBL.appendChild(table);
    }
}

export { renderTbl };