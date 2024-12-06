import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

const calculateAvg = (data) => {
    if (data.length === 0) return;
    const reduceTotal = data.reduce((sum, ea) => sum + ea.total, 0);
    const average = Math.floor(reduceTotal / data.length);

    const tableRef = document.getElementById("table-id");
    let avgRow = document.getElementById("average-row");

    if (avgRow) {
        avgRow.cells[1].textContent = average;
    } else {
        avgRow = tableRef.insertRow(-1);
        avgRow.id = "average-row";

        const avgLabelCell = avgRow.insertCell(0);
        avgLabelCell.colSpan = 2;
        avgLabelCell.textContent = "Average Footprint";

        const avgValueCell = avgRow.insertCell(1);
        avgValueCell.textContent = average;

        avgRow.insertCell(2);
    }
};

const renderTblHeading = () => {
    const table = document.createElement("table");
    table.setAttribute("id", "table-id")
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["First", "Last", "Footprint Total", "Actions"];

    headingTextArr.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);
    return table
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
        FORM.firstName.value = obj.first;
        FORM.lastName.value = obj.last;
        FORM.housem.value = obj.houseMembers;
        FORM.houses.value = obj.houseSize;
        FORM.foodc.value = obj.foodChoice;
        FORM.foodsource.value = obj.foodSource;
        FORM.washingmachine.value = obj.washingMachine;
        FORM.dishwasher.value = obj.dishWasher;
        FORM.householdpurchases.value = obj.houseHoldPurchases;
        FORM.garbagecans.value = obj.garbageCans;
        FORM.glass.checked = obj.recycle.glass;
        FORM.plastic.checked = obj.recycle.plastic;
        FORM.steel.checked = obj.recycle.steel;
        FORM.paper.checked = obj.recycle.paper;
        FORM.food.checked = obj.recycle.food;
        FORM.aluminum.checked = obj.recycle.aluminum;
        onUpdate(index, data);
    });

    return td;
}

const renderTblBody = data => {
    const tbody = document.createElement("tbody");
    data.forEach((obj, index) => {
        const tr = document.createElement("tr");
        const keys = ["first", "last", "total"]

        keys.forEach(key => {
            const td = document.createElement("td");
            td.textContent = obj[key];
            tr.appendChild(td);
        })

        const td = renderTblBtn(obj, index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
}

const renderTbl = data => {
    TBL.innerHTML = "";
    if (data.length > 0) {
        const table = renderTblHeading();
        const tbody = renderTblBody(data);
        table.appendChild(tbody);
        TBL.appendChild(table);
        calculateAvg(data);
    }
}

export { renderTbl };