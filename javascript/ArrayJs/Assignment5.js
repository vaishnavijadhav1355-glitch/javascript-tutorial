function manualIncludes(arr, value){
    for(let item of arr){
        if(item == value) return true;
    }
    return false;
}
console.log(manualIncludes([1, 2, 3], 2));
console.log(manualIncludes([1, 2, 3], 4));