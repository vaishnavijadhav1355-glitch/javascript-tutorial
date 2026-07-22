// Initialize sum trackers
let sumEven = 0;
let sumOdd = 0;

// Loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i; // Add to even sum if divisible by 2
    } else {
        sumOdd += i;  // Add to odd sum if not divisible by 2
    }
}

// Display the results
console.log("Sum of even numbers: " + sumEven);
console.log("Sum of odd numbers: " + sumOdd);