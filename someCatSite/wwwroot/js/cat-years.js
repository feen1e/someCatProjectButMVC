const months = document.getElementById('months');
const years = document.getElementById('years');
const result = document.getElementById('result-years');
const calculateBtn = document.getElementById('calculate-button');

const calculateAge = () => {
    const catMonths = Number(months.value);
    const catYears = Number(years.value);
    if (catMonths < 0 || catYears < 0 || (catMonths === 0 && catYears === 0)) {
        alert("Please provide valid age.");
    } else {
        const convYears = catYears + (catMonths / 12);
        const convMonths = catYears * 12 + catMonths;
        let lifeStage;
        if (convYears <= 0.5) {
            lifeStage = "Kitten";
        } else if (convYears <= 2) {
            lifeStage = "Junior";
        } else if (convYears <= 6) {
            lifeStage = "Adult";
        } else if (convYears <= 10) {
            lifeStage = "Mature";
        } else {
            lifeStage = "Senior";
        }
        let humanYears;
        if (lifeStage === "Kitten") {
            humanYears = convMonths - 2 > 0 ? convMonths + (convMonths - 2) : convMonths;
        } else if (lifeStage === "Junior") {
            humanYears = convMonths > 12 ? 12 + (convMonths) / 2 : 12 + (convMonths - 6) / 2;
        } else {
            humanYears = 24 + (4 * (catYears - 2))
        }
        result.innerText = `Your cat is about ${humanYears} human years old.
        Its life stage is: ${lifeStage}`;
    }
}

calculateBtn.addEventListener("click", () => {
    calculateAge();
})

years.addEventListener("keydown", (key) => {
    if (key.key === "Enter") {
        calculateAge();
    }
})