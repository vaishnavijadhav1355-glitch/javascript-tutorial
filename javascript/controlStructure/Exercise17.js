function findDivisors(num) {
    let divisors = [];
    
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    
    return divisors;
}
const number = 12;
const result = findDivisors(number);
console.log(`Enter a number: ${number}`);
console.log(`Divisors of ${number}: ${result.join(", ")}`);