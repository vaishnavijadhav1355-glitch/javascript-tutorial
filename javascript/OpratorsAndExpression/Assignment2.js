const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first number: ", (input1) => {
    rl.question("Enter the second number: ", (input2) => {
        const num1 = Number(input1);
        const num2 = Number(input2);

        console.log("First number > Second number:", num1 > num2);
        console.log("First number < Second number:", num1 < num2);
        console.log("Both numbers are equal:", num1 === num2);

        rl.close();
    });
});