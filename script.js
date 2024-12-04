// Select Elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add Task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    // Create Task Element
    const taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button>Delete</button>
    `;

    // Mark as Completed
    taskItem.addEventListener("click", (e) => {
        if (e.target.tagName === "SPAN") {
            taskItem.classList.toggle("completed");
        }
    });

    // Delete Task
    const deleteButton = taskItem.querySelector("button");
    deleteButton.addEventListener("click", () => {
        taskItem.remove();
    });

    // Append to List
    taskList.appendChild(taskItem);

    // Clear Input
    taskInput.value = "";
});

// Enable Enter Key to Add Task
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTaskButton.click();
    }
});
