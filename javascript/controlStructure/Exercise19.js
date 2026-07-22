function checkArmstrong(inputNumber) {
    const numberStr = inputNumber.toString();
    const numDigits = numberStr.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numberStr[i]);
        sum += Math.pow(digit, numDigits);
    }
    if (sum === inputNumber) {
        console.log(`${inputNumber} is an Armstrong number.`);
    } else {
        console.log(`${inputNumber} is NOT an Armstrong number.`);
    }
}
console.log("Enter a number: 153");
checkArmstrong(153);