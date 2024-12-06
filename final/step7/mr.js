class MR {
    constructor(diningPreference, cuisineType, selectedMeals, timesAteOut, isTired) {
        this.diningPreference = diningPreference;
        this.cuisineType = cuisineType;
        this.selectedMeals = selectedMeals;
        this.timesAteOut = timesAteOut;
        this.isTired = isTired;

        this.displayRecommendation();
    }

    displayRecommendation() {
        const recommendationDiv = document.getElementById('recommendation');
        let recommendation = '';

        if (this.diningPreference === "Eat In" && this.isTired === "Yes") {
            recommendation = "You're tired. Consider eating out today for convenience!";
        } else if (this.timesAteOut > 4) {
            recommendation = "You've eaten out quite a bit this week. Save money by eating in today!";
        }

        recommendationDiv.textContent = recommendation;
    }

}

export { MR }