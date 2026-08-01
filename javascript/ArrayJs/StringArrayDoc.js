//1.Introduction to strings
let name = "Vaishnavi";
console.log(name);

let cityName = "Nashik";
console.log(cityName);

let firstName = "Vaishnavi";
let lastName = "Jadhav";
let fullName = firstName+" "+lastName;
console.log(fullName);

//let name = "Vaishnavi";
//let city = "Nashik";
let hobby = "Travelling";
console.log(`My name is ${name}, I live in ${cityName} and my hobby is ${hobby}.`);

let favoriteLanguage = "HTML";
console.log(favoriteLanguage);

//2.String properties and methods
let text = "Vaishnavi";
console.log(text.length);

//let text = "Vaishnavi";
console.log(text.toUpperCase());

let cityName1 = "NASHIK";
console.log(cityName1.toLowerCase());

//let text = "Vaishnavi";
console.log(text.charAt(0));

//let text = "Vaishnavi";
console.log(text.indexOf("n"));

//3.More string methods
let fullName1 = "Vaishnavi Jadhav";
let firstName1 = fullName1.slice(0, 9);
console.log(firstName1);

let text1 = "I like Java";
console.log(text1.replace("Java","Javascript"));

//let name = "Vaishnavi";
let result = name.includes("a");
console.log(result);

let sentence = "I love javascript";
console.log(sentence.split(" "));

//let sentence = "I love javascript";
let newSentence = sentence.replace("javascript","HTML");
console.log(newSentence);

//4.Introduction to arrays
let fruits = ["Apple", "Mango", "Banana", "Pineapple","Papaya"];
console.log(fruits);

//let fruits = ["Apple", "Mango", "Banana", "Pineapple","Papaya"];
console.log(fruits[0]);

//let fruits = ["Apple", "Mango", "Banana", "Pineapple","Papaya"];
console.log(fruits[4]);

//let fruits = ["Apple", "Mango", "Banana", "Pineapple","Papaya"];
console.log(fruits.length);

let cities = ["Nashik", "Mumbai", "Pune", "Banglore", "Delhi"];
console.log(cities);

//5.Array methods
//let fruits = ["Apple", "Mango", "Banana", "Pineapple","Papaya"];
fruits.push("Coconut");
console.log(fruits);

//let fruits = ["Apple", "Mango", "Banana", "Pineapple","Papaya"];
fruits.pop("Coconut");
console.log(fruits);

//let fruits = ["Apple", "Mango", "Banana", "Pineapple","Papaya"];
fruits.shift("Apple");
console.log(fruits);

//let fruits = ["Apple", "Mango", "Banana", "Pineapple","Papaya"];
fruits.shift("Apple");
console.log(fruits);

//let cities = ["Nashik", "Mumbai", "Pune", "Banglore", "Delhi"];
cities.unshift("chennai");
console.log(cities);

//6.More array methods
//let fruits = ["Apple", "Mango", "Banana", "Pineapple","Papaya"];
let favoriteFruit = "Mango";
console.log(fruits.includes(favoriteFruit));

//let cities = ["Nashik", "Mumbai", "Pune", "Banglore", "Delhi"];
console.log(cities.indexOf("Mumbai"));

//let fruits = ["Apple", "Mango", "Banana", "Pineapple","Papaya"];
let result1 = fruits.join("-");
console.log(result1);

let colors = ["Red", "Blue", "Green", "Yellow"];
colors.reverse();
console.log(colors);

let subjects = ["Math", "English", "Science","Histroy"]
subjects.reverse();
console.log(subjects);

//7.Array Iteration methods
//1.forEach()
let students = ["Vaishnavi","Harshada","Riya"];
students.forEach((students)=> {
    console.log(students);

});

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num)=> {
    console.log(num * 2);
});

//let cities = ["Nashik", "Mumbai", "Pune", "Banglore", "Delhi"];
cities.forEach((city)=> {
    console.log(city.toUpperCase());
});

//2.map()
//let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log(squares);

let names = ["vaishnavi", "riya", "harshada"];
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);

//let numbers = [1, 2, 3, 4, 5];
let updatedNumbers = numbers.map(num => num + 5);
console.log(updatedNumbers);

let strings = ["apple", "banana", "kiwi", "grapes"];
let lengths = strings.map(str => str.length);
console.log(lengths);

let prices = [100, 250, 500, 1000];
let discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices);

//8.filter()
let numberss = [1, 2, 3, 4, 5, 6, 7,];
let evenNumbers = numbers.filter(num => num%2 === 0);
console.log(evenNumbers);

//let numberss = [1, 2, 3, 4, 5, 6, 7,];
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

let numbers3 = [ 10, 25, 50, 60, 75, 90, 45];
let greaterThan50 = numbers3.filter(num => num > 50);
console.log(greaterThan50);

let namess = ["Sam", "John", "Sara", "Mike", "Sophia", "David"];
let namesStartingWithS = namess.filter(name => name.startsWith("S"));
console.log(namesStartingWithS);

let string1 = ["apple", "banana", "kiwi", "orange", "mango", "grapes"];
let longStrings = string1.filter(str => str.length > 5);
console.log(longStrings);

//9.every() and some()
//every()
let numbers4 = [5, 10, 20, 30];
let allPositive = numbers4.every(num => num > 0);
console.log(allPositive);

let marks = [45, 60, 75, 40, 50];
let allPassed = marks.every(marks => marks > 35);
console.log(allPassed);

let names1 = ["Sam", "John", "Alex", "Raj"];
let allValidNames = names1.every(name => name.length >= 3);
console.log(allValidNames);

//some()
let nums = [12, 23, 35, 47, 60];
let divisibleByFive = nums.some(num => num % 5 === 0);
console.log(divisibleByFive);

let marks1 = [45, 60, 30, 80, 50];
let hasFailedStudent = marks1.some(mark => mark < 35);
console.log(hasFailedStudent);

let cities1 = ["Nashik", "Pune" ,"Punjab", "Mumbai"];
let namesStartingWithP = cities1.some(name => name.startsWith("P"));
console.log(namesStartingWithP);

//10.reduce() 
let numb = [10, 20, 30, 40, 50];
let sum = numb.reduce((total, num) => total + num, 0);
console.log(sum);

let numbs = [2, 3, 4, 5];
let products = numbs.reduce((result, num) => result * num, 1);
console.log(products);

let numb1 = [10, 50, 25, 70, 30];
let max = numb1.reduce((largest,num) => {
    return num > largest ? num : largest;
});
console.log(max);

let numb2 = [10, 15, 40, 50, 30];
let min = numb2.reduce((smallest, num) => {
    return num < smallest ? num : smallest;
});
console.log(min);

let names0 = ["vaishnavi", "riya", "harshada"];
let totalCharacters = names0.reduce((total, name) => total + name.length, 0);
console.log(totalCharacters);

//11.Chaining array methods
let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8];
let result2 = numbers5
    .filter(num => num % 2 === 0) // keep even numbers
    .map(num => num * 2) // double each even number
console.log(result2);

let numbers6 = [10, 55, 70, 30, 90, 45, 60];
let sums = numbers6
    .filter(num => num > 50) //keep numbers greater than 50
    .reduce((total, num) => total + num, 0); // sum them
console.log(sums);

//let names0 = ["vaishnavi", "riya", "harshada"];
let result3 = names0
    .map(name => name.toUpperCase()) // convert to uppercase
    .join(", "); // join with commas
console.log(result3);

let flowers = ["Rose", "Lily", "Tulip", "Lotus", "Jasmine","sunflower"];
let lengths0 = flowers
    .filter(flower => flower.length > 4) // keep flowers with names longer than 4 characters
    .map(flower => flower.length); // get the length of each flower name
console.log(lengths0);

//let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8];
let totalSum = numbers5
    .filter(num => num %2 === 0) // keep even numbers
    .reduce((sum, num)=> sum + num, 0); // Add them
console.log(totalSum);




