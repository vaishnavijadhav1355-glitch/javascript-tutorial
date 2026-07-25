function getFirstWord (sentence) {

let firstWord = "";

for (let i = 0; i < sentence.length; i++) {

if (sentence[i] === "") break;

firstWord += sentence[i];

}

return firstWord;

}

console.log(getFirstWord("Hello, World!"));