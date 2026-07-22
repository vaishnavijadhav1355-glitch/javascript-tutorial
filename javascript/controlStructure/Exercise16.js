function isLeapYear(year) {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}


let inputYear = 2024; 

console.log("Enter a year: " + inputYear);

if (isLeapYear(inputYear)) {
    console.log(inputYear + " is a leap year.");
} else {
    console.log(inputYear + " is not a leap year.");
}