const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", function(str) {

    let reversed = str.split("").reverse().join("");

    if (str === reversed) {
        console.log(str + " is a palindrome.");
    } else {
        console.log(str + " is not a palindrome.");
    }

    rl.close();
});