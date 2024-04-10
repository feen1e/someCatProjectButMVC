const result = document.getElementById("result");
const calculateBtn = document.getElementById("calculate-button");
const userInput = document.getElementById("weight");

const calculateWeight = () => {
    const weight = Number(userInput.value);
    if (weight <= 0 || weight > 20) {
        alert("Please enter a valid weight.")
    } else {
        const calorieNeeds = 100 * Math.pow(weight, 0.67);
        const treats = calorieNeeds * 0.1;
        result.innerText = `A cat that weights ${weight} kg needs about ${calorieNeeds.toFixed(2)} kcal daily.
        Maximum amount of treats it should eat is ${treats.toFixed(2)} kcal a day.`;
    }
}

userInput.addEventListener("keydown", (key) => {
    if (key.key === "Enter") {
        calculateWeight();
    }
})

calculateBtn.addEventListener("click", () => {
    calculateWeight();
});