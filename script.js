// Get the input fields and button
const csgoMarketField = document.getElementById("csgoMarketField");
const buffField = document.getElementById("buffField");
const calculateButton = document.getElementById("calculateButton");

// Get the result and profit labels
const resultLabel = document.getElementById("resultLabel");
const profitLabel = document.getElementById("profitLabel");

// Add event listener to the Calculate button
calculateButton.addEventListener("click", () => {
    calculatePercentage();
});

function calculatePercentage() {
    try {
        const csgoMarket = parseFloat(csgoMarketField.value);
        const buff = parseFloat(buffField.value);
        const difference = (buff * 0.97) - csgoMarket;

        const percentage = (csgoMarket / buff) * 100;
        let color = "";

        if (percentage >= 97) {
            color = "red";
        } else if (percentage >= 95) {
            color = "orange";
        } else {
            color = "green";
        }

        resultLabel.innerText = `The BUFF percentage is ${percentage.toFixed(2)}%.`;
        resultLabel.style.color = color;
        profitLabel.innerText = `The profit after fees is $${difference.toFixed(2)}.`;

    } catch (error) {

    }
}
