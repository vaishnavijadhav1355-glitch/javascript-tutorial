function generateFibonacci(n) {

    if (n <= 0) {
        return [];
    }
    
    if (n === 1) {
        return [0];
    }

    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
    
        let nextTerm = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextTerm);
    }

    return sequence;
}


const terms = 6;
const result = generateFibonacci(terms);

console.log(`How many terms? ${terms}`);
console.log(`Fibonacci sequence: ${result.join(', ')}`);