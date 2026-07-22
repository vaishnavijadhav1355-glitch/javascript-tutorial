let inputNumber = 5; // Enter your number here

let originalNumber = inputNumber;
let factorial = 1;
let sequence = "";

while (inputNumber > 0) {
    factorial *= inputNumber;

    sequence += inputNumber;
    if (inputNumber > 1) {
        sequence += "*";
    }

    inputNumber--;
}

console.log("Enter a number: " + originalNumber);
console.log("Factorial of " + originalNumber + ": " + factorial);
console.log(sequence);