function reverseArray(arr) {
    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log("i =", i);
        reversed.push(arr[i]);
    }

    return reversed;
}

console.log(reverseArray([1, 2, 3, 4]));