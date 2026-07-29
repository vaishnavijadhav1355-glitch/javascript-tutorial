function shiftLeft(arr){
    if (arr.length === 0) return arr;

    let first = arr.shift();
    arr.push(first);
    return arr;
}
console.log(shiftLeft([1, 2, 3, 4]));