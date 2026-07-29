function frequencyCount(arr){
    let freq = {};
    for (let num of arr){
        freq[num] = (freq[num] || 0)+1;
    }
    return freq;
}
console.log(frequencyCount([1, 2, 2, 3, 3, 3]));