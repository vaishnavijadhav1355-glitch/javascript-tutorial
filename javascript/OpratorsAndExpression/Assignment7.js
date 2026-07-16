const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your age: ", (age) => {
  rl.question("Are you a citizen? (true/false): ", (citizen) => {
    age = Number(age);
    citizen = citizen.toLowerCase() === "true";

    // Check voting eligibility using AND (&&) and NOT (!)
    let canVote = (age >= 18) && !(!citizen);

    if (canVote) {
      console.log("You are eligible to vote.");
    } else {
      console.log("You are NOT eligible to vote.");
    }

    rl.close();
  });
});