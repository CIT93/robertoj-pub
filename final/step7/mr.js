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
            recommendation = "You're tired. Consider eating out today you deserve it!";
        } else if (this.diningPreference === "Eat Out" && this.isTired === "No") {
            recommendation = "You're feeling great! Treat yourself to a nice restaurant meal.";
        } else if (this.timesAteOut > 3) {
            recommendation = "You've eaten out quite a bit this week. Save money by eating in today!";
        } else if (this.diningPreference === "Eat In" && this.timesAteOut === 0) {
            recommendation = "You've been cooking all week! Maybe take a break and enjoy a meal out.";
        } else if (this.diningPreference === "Eat Out" && this.timesAteOut < 2) {
            recommendation = "You've been eating in a lot. A night out could be fun!";
        } else if (this.isTired === "Yes" && this.timesAteOut > 5) {
            recommendation = "You've been out a lot and you're tired. Consider a quiet meal at home.";
        } else if (this.diningPreference === "Eat In" && this.isTired === "No" && this.timesAteOut < 2) {
            recommendation = "You're feeling energetic and haven't eaten out much. Maybe cook something special at home!";
        } else {
            recommendation = "Not sure what to recommend! Follow your heart—or your stomach!";
        }
    
        recommendationDiv.textContent = recommendation;
    }

}

export { MR }