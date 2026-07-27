const inputElement = document.getElementById("inputPara")
const resultElement = document.getElementById("result")


function convertToUpperCase(){
    const inputValue = inputElement.value 
    outputText = inputValue.toUpperCase()
    resultElement.textContent = outputText
}

function CheckPalindrom(){
    const inputValue = inputElement.value 

    reverseSTR = ''
    for(let i=inputValue.length-1; i>=0; i--){
        reverseSTR = reverseSTR + inputValue[i]
    }
    console.log(reverseSTR)
    if(inputValue == reverseSTR){
        console.log("*******")
        outputText = "It is PALINDROM"
    }else{
        outputText = "It Not PALINDROM"
    }
    resultElement.textContent = outputText
}

function countVowels(){
    const inputValue = inputElement.value 
    count = 0

    vowels = 'aeiouAEIOU'

//    'Hello World'
//    count = 3

    len = inputValue.length

    for(i=0; i<len; i++){
        inputValue[i] // inputValue.charAt(i)

       if(vowels.includes(inputValue[i])){
        count++
       } 
    }

    resultElement.textContent = "Vowels count : "+ count
}

// Convert to Lower Case
function convertLowerCase() {
    let text = inputElement.value;
    resultElement.textContent = text.toLowerCase();
}


// Convert to Camel Case
function convertCamelCase() {
    let text = inputElement.value;

    let words = text.toLowerCase().trim().split(/\s+/);

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    resultElement.textContent = words.join("");
}
// Extract First Word
function extractFirstWord() {
    let text = inputElement.value;

    let firstWord = text.trim().split(/\s+/)[0];

    resultElement.textContent = firstWord;
}

// Count Number of Lines
function countLines() {
    let text = inputElement.value;

    let lines = text === "" ? 0 : text.split("\n").length;

    resultElement.textContent = "Number of Lines: " + lines;
}

// Count Consonants
function countConsonants() {
    let text = inputElement.value;

    let consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi);

    let count = consonants ? consonants.length : 0;

    resultElement.textContent = "Consonants: " + count;
}

// Extract Special Characters
function extractSpecialCharacters() {
    let text = inputElement.value;

    let special = text.match(/[^a-zA-Z0-9\s]/g);

    resultElement.textContent =
        special ? special.join(" ") : "No Special Characters";
}
// Count Spaces
function countSpaces() {
    let text = inputElement.value;

    let spaces = text.match(/ /g);

    let count = spaces ? spaces.length : 0;

    resultElement.textContent = "Spaces: " + count;
}

// Replace Spaces with Hyphen
function replaceSpaces() {
    let text = inputElement.value;

    resultElement.textContent = text.replaceAll(" ", "-");
}

// Sort Words
function sortWords() {
    let text = inputElement.value;

    let sorted = text.trim().split(/\s+/).sort().join(" ");

    resultElement.textContent = sorted;
}