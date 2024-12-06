class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice, foodSource, washingMachine, dishWasher, houseHoldPurchases, garbageCans, recycle) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.foodChoice = foodChoice;
        this.foodSource = foodSource;
        this.washingMachine = washingMachine;
        this.dishWasher = dishWasher;
        this.houseHoldPurchases = houseHoldPurchases;
        this.garbageCans = garbageCans;
        this.recycle = recycle;

        this.calHouseHoldPoints();
        this.calHouseSizePoints();
        this.calFoodChoicePoints();
        this.calFoodSourcePoints();
        this.calAppliancePoints();
        this.calHouseHoldPurchasesPoints();
        this.calGarbageCansPoints();
        this.calTotal();

    }
    calHouseHoldPoints() {
        if (this.houseMembers === 1) {
            this.houseHoldPoints = 14;
        } else if (this.houseMembers === 2) {
            this.houseHoldPoints = 12;
        } else if (this.houseMembers === 3) {
            this.houseHoldPoints = 10;
        } else if (this.houseMembers === 4) {
            this.houseHoldPoints = 8;
        } else if (this.houseMembers === 5) {
            this.houseHoldPoints = 6;
        } else if (this.houseMembers === 6) {
            this.houseHoldPoints = 4;
        } else if (this.houseMembers > 6) {
            this.houseHoldPoints = 2;
        }
    }
    calHouseSizePoints() {
        if (this.houseSize === 'large') {
            this.houseSizePoints = 10;
        }
        else if (this.houseSize === 'medium') {
            this.houseSizePoints = 7;
        }
        else if (this.houseSize === 'small') {
            this.houseSizePoints = 4;
        }
        else if (this.houseSize === 'apartment') {
            this.houseSizePoints = 2;
        }
    }

    calFoodChoicePoints() {
        if (this.foodChoice === 'domesticMeatDaily') {
            this.foodChoicePoints = 10;
        }
        else if (this.foodChoice === 'domesticMeatFewTimes') {
            this.foodChoicePoints = 8;
        }
        else if (this.foodChoice === 'vegetarian') {
            this.foodChoicePoints = 4;
        }
        else if (this.foodChoice === 'veganWildMeat') {
            this.foodChoicePoints = 2;
        }
    }

    calFoodSourcePoints() {
        if (this.foodSource === "packed") {
            this.foodSourcePoints = 12;
        } else if (this.foodSource === "balance") {
            this.foodSourcePoints = 6;
        } else if (this.foodSource === "local") {
            this.foodSourcePoints = 2;
        }
    }

    calAppliancePoints() {
        this.appliancePoints = 0;

        if (this.washingMachine === "lots") {
            this.appliancePoints += 3;
        } else if (this.washingMachine === "average") {
            this.appliancePoints += 2;
        } else if (this.washingMachine === "sometimes") {
            this.appliancePoints += 1;
        }

        if (this.dishWasher === "lots") {
            this.appliancePoints += 3;
        } else if (this.dishWasher === "average") {
            this.appliancePoints += 2;
        } else if (this.dishWasher === "sometimes") {
            this.appliancePoints += 1;
        } else if (this.dishWasher === "none") {
            this.appliancePoints += 0;
        }
    }

    calHouseHoldPurchasesPoints() {
        if (this.houseHoldPurchases === "lots") {
            this.houseHoldPurchasesPoints = 10;
        } else if (this.houseHoldPurchases === "frequent") {
            this.houseHoldPurchasesPoints = 8;
        } else if (this.houseHoldPurchases === "average") {
            this.houseHoldPurchasesPoints = 6;
        } else if (this.houseHoldPurchases === "few") {
            this.houseHoldPurchasesPoints = 4;
        } else if (this.houseHoldPurchases === "none") {
            this.houseHoldPurchasesPoints = 2;
        }
    }

    calGarbageCansPoints() {
        if (this.garbageCans === "garbage_four") {
            this.garbageCansPoints = 50;
        } else if (this.garbageCans === "garbage_three") {
            this.garbageCansPoints = 40;
        } else if (this.garbageCans === "garbage_two") {
            this.garbageCansPoints = 30;
        } else if (this.garbageCans === "garbage_one") {
            this.garbageCansPoints = 20;
        } else if (this.garbageCans === "garbage_half") {
            this.garbageCansPoints = 5;
        }
    }

    calTotal() {
        this.total =
            this.houseHoldPoints +
            this.houseSizePoints +
            this.foodChoicePoints +
            this.foodSourcePoints +
            this.appliancePoints +
            this.houseHoldPurchasesPoints +
            this.recycle.recyclePoints +
            this.garbageCansPoints;
    }

}

export { FP }