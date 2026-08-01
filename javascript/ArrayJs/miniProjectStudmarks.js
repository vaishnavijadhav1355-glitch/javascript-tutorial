let marks = [45, 67, 89, 34, 76, 91, 58];

// Passed Students
let passed = marks.filter(mark => mark >= 35);

// Bonus Marks
let bonus = marks.map(mark => mark + 5);

// Total Marks
let total = marks.reduce((sum, mark) => sum + mark, 0);

// Average
let average = total / marks.length;

// Highest Mark
let highest = marks.reduce((max, mark) => (mark > max ? mark : max), marks[0]);

// All Passed?
let allPassed = marks.every(mark => mark >= 35);

// Any Distinction?
let distinction = marks.some(mark => mark >= 75);

console.log("Passed:", passed);
console.log("Bonus:", bonus);
console.log("Total:", total);
console.log("Average:", average);
console.log("Highest:", highest);
console.log("All Passed:", allPassed);
console.log("Any Distinction:", distinction);