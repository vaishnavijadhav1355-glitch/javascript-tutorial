const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Math score: ", (mathInput) => {
    rl.question("Enter Science score: ", (scienceInput) => {
        const mathScore = Number(mathInput);
        const scienceScore = Number(scienceInput);

        const isEligible = (mathScore >= 90) && (scienceScore >= 85);

        console.log("Scholarship Eligible:", isEligible);

        rl.close();
    });
});