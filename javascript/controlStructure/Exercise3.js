const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
    rl.question("Guess a number between 1 and 10: ", function(input) {
        let guess = Number(input);

        if (guess === secretNumber) {
            console.log("Congratulations! You guessed the correct number.");
            rl.close();
        } else {
            console.log("Wrong guess. Try again!");
            guessNumber(); // keeps asking until correct
        }
    });
}

guessNumber();