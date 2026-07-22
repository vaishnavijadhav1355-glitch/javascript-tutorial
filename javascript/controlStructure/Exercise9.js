const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(num1) {
    rl.question("Enter second number: ", function(num2) {
        rl.question("Enter third number: ", function(num3) {

            num1 = Number(num1);
            num2 = Number(num2);
            num3 = Number(num3);

            let largest;

            if (num1 >= num2 && num1 >= num3) {
                largest = num1;
            } else if (num2 >= num1 && num2 >= num3) {
                largest = num2;
            } else {
                largest = num3;
            }

            console.log("The largest number is " + largest + ".");

            rl.close();
        });
    });
});