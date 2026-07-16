const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your weight (kg): ", (weight) => {
  rl.question("Enter your height (m): ", (height) => {
    weight = Number(weight);
    height = Number(height);

    // Calculate BMI
    let bmi = weight / (height * height);

    console.log("BMI:", bmi.toFixed(2));

    // Categorize BMI
    if (bmi < 18.5) {
      console.log("Category: Underweight");
    } else if (bmi >= 18.5 && bmi < 25) {
      console.log("Category: Normal weight");
    } else if (bmi >= 25 && bmi < 30) {
      console.log("Category: Overweight");
    } else {
      console.log("Category: Obesity");
    }

    rl.close();
  });
});