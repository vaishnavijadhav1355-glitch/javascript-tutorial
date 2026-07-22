const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('How many numbers? ', (countInput) => {
    let n = parseInt(countInput);
    let sum = 0;
    let currentIteration = 0;

    console.log("Enter the numbers:");


    function askForNumber() {
        if (currentIteration < n) {
            readline.question('', (numInput) => {
                sum += parseFloat(numInput);
                currentIteration++;
                askForNumber();
            });
        } else {
            let average = sum / n;
            console.log(`Sum: ${sum}`);
            console.log(`Average: ${average}`);
            readline.close();
        }
    }

    askForNumber();
});