function countVowelsAndConsonants(str) {
    let vowelsCount = 0;
    let consonantsCount = 0;
    
    const lowerStr = str.toLowerCase();
   
    const vowels = "aeiou";

    for (let char of lowerStr) {
        
        if (char >= 'a' && char <= 'z') {
            if (vowels.includes(char)) {
                vowelsCount++;
            } else {
                consonantsCount++;
            }
        }
    }

    
    console.log(`Enter a string: ${str}`);
    console.log(`Vowels: ${vowelsCount}`);
    console.log(`Consonants: ${consonantsCount}`);
}
countVowelsAndConsonants("Hello World");