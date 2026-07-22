const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(input) {
    let number = parseInt(input);
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(number + " is a prime number.");
    } else {
        console.log(number + " is not a prime number.");
    }

    rl.close();
});