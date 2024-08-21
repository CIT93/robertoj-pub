// How to Calculate Your Carbon Footprint

// Method 1 Calculating Your Carbon Footprint Points

// 1 Count the members of your household.
const houseMembersPoints = 8;

// 2 Consider the size of your home
const homeSizePoints = 2;

// 3 Evaluate your food choices.
const foodChoicesPoints = 16;

// 4 Examine your water consumption.
const waterConsumptionPoints = 1;

// 5 Determine how many household purchases you make each year.
const homePurchasesPoints = 10;

// 6 Consider how much waste you produce.
const wastePoints = 20;

// 7 Identify the amount of waste that you recycle. 
const recyclePoints = 12;

// 8 Tally up your annual transportation scores.
const transportationPoints = 10;

// 9 Add up your points.
const cfpTotalPoints = houseMembersPoints + homeSizePoints + foodChoicesPoints +
waterConsumptionPoints + homePurchasesPoints + wastePoints + recyclePoints + transportationPoints

// 10 JS code to update html
const headingPoints = document.querySelector("h2");
headingPoints.textContent = cfpTotalPoints;