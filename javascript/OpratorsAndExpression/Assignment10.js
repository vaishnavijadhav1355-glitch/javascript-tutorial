const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter total amount: ", (total) => {
    total = Number(total);

    if (total > 100) {
        total -= total * 0.10;   // Assignment operator
    }

    console.log("Discounted total: " + total);

    readline.close();
});