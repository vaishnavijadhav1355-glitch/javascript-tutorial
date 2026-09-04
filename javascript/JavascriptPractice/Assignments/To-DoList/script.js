let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {

    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // Create new list item
    let li = document.createElement("li");

    // Create task text
    let taskText = document.createElement("span");
    taskText.textContent = task;

    // Create delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    // Add task text and button to li
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    // Add li to the list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
    taskInput.focus();

    // Mark task as completed
    taskText.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Delete task
    deleteButton.addEventListener("click", function () {
        li.remove();
    });
});