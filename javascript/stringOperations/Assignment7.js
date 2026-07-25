const strPara = "hello world";

function reverseString(str) {
    let reverseSTR = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverseSTR = reverseSTR + str[i];
    }

    return reverseSTR;
}

const reverseOutput = reverseString(strPara);
console.log(reverseOutput);