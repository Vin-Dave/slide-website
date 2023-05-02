const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const tasksList = document.querySelector("#tasks");
const filters = document.querySelector(".filters");
const allBtn = document.querySelector("#all-btn");
const completedBtn = document.querySelector("#completed-btn");
const uncompletedBtn = document.querySelector("#uncompleted-btn");

let tasks = [];

// Add task to the list
function addTask(e) {
  e.preventDefault();
  const taskName = taskInput.value.trim();
  if (!taskName) return;
  const task = {
    id: Date.now(),
    name: taskName,
    completed: false,
  };
  tasks.push(task);
  taskInput.value = "";
  renderTasks();
}

// Render tasks list
function renderTasks() {
  tasksList.innerHTML = "";
  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    if (task.completed) {
      taskItem.classList.add("complete");
    }
    taskItem.innerHTML = `
      <div class="task-item-content">${task.name}</div>
      <div class="task-item-actions">
        <button class="complete-btn">${
          task.completed ? "Undo" : "Complete"
        }</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;
    tasksList.appendChild(taskItem);
  });
  updateFilters();
}

// Update filters buttons
function updateFilters() {
  const completedTasks = tasks.filter((task) => task.completed);
  const uncompletedTasks = tasks.filter((task) => !task.completed);
  allBtn.innerHTML = `All (${tasks.length})`;
  completedBtn.innerHTML = `Completed (${completedTasks.length})`;
  uncompletedBtn.innerHTML = `Uncompleted (${uncompletedTasks.length})`;
}
