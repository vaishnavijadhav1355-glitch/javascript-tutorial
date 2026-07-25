function removeNonAlphanumeric(str) {

let result = "";

for (let i=0; i < str.length; i++) {

if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" &&

str[i] <= "Z") || (str[i] >= "0" && str[i] <= "9")) {

result += str[i];

}

}
return result;

}

console.log(removeNonAlphanumeric("Hello, World! 123."));