function generatePyramid(rows) {

for (let i = 1; i <= rows; i++) {

let line = "";

for (let space = 1; space <= rows - i; space++) { 
    line += "";

}

for (let num = 1; num <= i; num++) { 

 line += num;
}

console.log(line);

 }

}
generatePyramid(5);