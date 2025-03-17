function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.className = "taskItem";
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    let li = button.parentElement;
    document.getElementById("taskList").removeChild(li);
}
