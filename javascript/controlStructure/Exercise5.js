const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(input) {
    let number = parseInt(input);
    let originalNumber = number;
    let sum = 0;
    let digits = [];

    do {
        let digit = number % 10;
        digits.unshift(digit);
        sum += digit;
        number = Math.floor(number / 10);
    } while (number > 0);

    console.log(digits.join("+"));
    console.log("Sum of digits:", sum);

    rl.close();
});