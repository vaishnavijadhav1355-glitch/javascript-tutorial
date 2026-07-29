function mergeWithDuplicates(arr1,arr2){
    return [...new set([...arr1, ...arr2])];
}
console.log(mergeWithDuplicates([1, 2, 3], [2, 3,4]));