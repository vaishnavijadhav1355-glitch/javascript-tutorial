const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the length: ", (length) => {
  rl.question("Enter the width: ", (width) => {
    length = Number(length);
    width = Number(width);

    let perimeter = 2 * (length + width);
    let area = length * width;

    console.log("Perimeter:", perimeter);
    console.log("Area:", area);

    if (perimeter > area) {
      console.log("The perimeter is greater than the area.");
    } else {
      console.log("The perimeter is NOT greater than the area.");
    }

    rl.close();
  });
});