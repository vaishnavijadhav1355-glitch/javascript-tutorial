// 1. to do list 

let toDos = ["Project 1", "Project 2"]

function renderToDos(){
    document.getElementById("lists").innerHTML = toDos.map((task,i)=>`
                                    <li class="mb-2">
                                        <b>${task}</b>
                                        <button class="btn btn-danger" onclick="deleteTask(${i})">Delete</button>    
                                    </li>
    `).join("")
}


// renderToDos()

function addNewTask(){
    inputTaskElmt = document.getElementById("inputTask")
    newTask = inputTaskElmt.value
    toDos.push(newTask)
    // console.log(toDos)
    renderToDos()
    inputTaskElmt.value = ''
}

function clearALL(){
    toDos = []
    renderToDos()
}

function deleteTask(index){
    // console.log("*************")
    // console.log(toDos,"Before splice")
    toDos.splice(index, 1)
    // console.log(toDos,"After splice")
    renderToDos()
}

window.addEventListener('load', ()=>{
    renderToDos()
})



// 2. Student Marks Calculator 
let marks = [];

function addMark() {
    let input = document.getElementById("markInput");
    let mark = Number(input.value);

     if (input.value === "" || mark < 0 || mark > 100) {
     alert("Please enter a valid mark between 0 and 100.");
     return;
    }

    marks.push(mark);
    input.value = "";
    input.focus();

    alert("Mark Added!");
}

function calculateMarks() {
    if (marks.length === 0) {
        alert("No marks added.");
        return;
    }

    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    let average = total / marks.length;
    let highest = Math.max(...marks);
    let lowest = Math.min(...marks);

    document.getElementById("result").innerHTML = `
        <p><strong>Total Marks:</strong> ${total}</p>
        <p><strong>Average Marks:</strong> ${average.toFixed(2)}</p>
        <p><strong>Highest Mark:</strong> ${highest}</p>
        <p><strong>Lowest Mark:</strong> ${lowest}</p>
    `;

}

function resetMarks() {
    marks = [];
    document.getElementById("markInput").value = "";

    document.getElementById("result").innerHTML = `
        <p>Total Marks: 0</p>
        <p>Average Marks: 0</p>
        <p>Highest Mark: 0</p>
        <p>Lowest Mark: 0</p>
    `;
}

// 3. Search
const cars = ["Audi", "BMW", "Tesla", "Honda", "Toyota"];

function searchItem() {
    const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();
    const result = document.getElementById("searchResult");

    let found = false;
    let output = "";

    for (let car of cars) {
        if (car.toLowerCase() === searchValue) {
            output += `<span class="highlight">${car}</span><br>`;
            found = true;
        } else {
            output += `${car}<br>`;
        }
    }

    if (found) {
        result.innerHTML = output;
    } else {
        result.innerHTML = "No matches found";
    }
}
// 4. Filter odd and Even 
let numbers = [];

function addNumber() {
    let input = document.getElementById("numberInput");
    let value = Number(input.value);

    if (input.value === "") {
        alert("Please enter a number");
        return;
    }

    numbers.push(value);
    input.value = "";
}

function showEven() {
    let even = numbers.filter(function(num) {
        return num % 2 === 0;
    });

    document.getElementById("evenBox").innerHTML = even.join(", ");
}

function showOdd() {
    let odd = numbers.filter(function(num) {
        return num % 2 !== 0;
    });

    document.getElementById("oddBox").innerHTML = odd.join(", ");
}

function clearData() {
    numbers = [];
    document.getElementById("numberInput").value = "";
    document.getElementById("evenBox").innerHTML = "";
    document.getElementById("oddBox").innerHTML = "";
}
// 5. Sort names alphabetically
let studentNames = [];

function addStudentName() {
    let input = document.getElementById("nameInput");
    let name = input.value.trim();

    if (name === "") {
        alert("Please enter a name.");
        return;
    }

    studentNames.push(name);

    document.getElementById("nameList").innerHTML =
        studentNames.join(", ");

    input.value = "";
    input.focus();
}

function sortStudentNames() {
    studentNames.sort((a, b) => a.localeCompare(b));

    document.getElementById("nameList").innerHTML =
        studentNames.join(", ");
}

function resetStudentNames() {
    studentNames = [];
    document.getElementById("nameList").innerHTML = "";
    document.getElementById("nameInput").value = "";
}