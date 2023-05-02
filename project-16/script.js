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

// Filter tasks
function filterTasks(filter) {
  tasksList.querySelectorAll(".task-item").forEach((taskItem) => {
    taskItem.style.display = "flex";
    switch (filter) {
      case "completed":
        if (!taskItem.classList.contains("complete")) {
          taskItem.style.display = "none";
        }
        break;
      case "uncompleted":
        if (taskItem.classList.contains("complete")) {
          taskItem.style.display = "none";
        }
        break;
      default:
        break;
    }
  });
  filters.querySelectorAll(".filter-btn").forEach((filterBtn) => {
    filterBtn.classList.remove("active");
  });
  filters.querySelector(`#${filter}-btn`).classList.add("active");
}

function toggleTaskCompletion(e) {
  if (!e.target.classList.contains("complete-btn")) return;
  const taskItem = e.target.closest(".task-item");
  const taskId = parseInt(taskItem.getAttribute("data-id"));
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  taskItem.classList.toggle("complete");
  if (tasks[taskIndex].completed) {
    taskItem.classList.add("completed");
  } else {
    taskItem.classList.remove("completed");
  }
  renderTasks();
}

// Delete task
function deleteTask(e) {
  if (!e.target.classList.contains("delete-btn")) return;
  const taskItem = e.target.closest(".task-item");
  const taskId = parseInt(taskItem.getAttribute("data-id"));
  tasks = tasks.filter((task) => task.id !== taskId);
  taskItem.classList.add("deleted");
  taskItem.addEventListener("animationend", () => {
    taskItem.remove();
    updateFilters();
  });
}

// Event listeners
form.addEventListener("submit", addTask);
tasksList.addEventListener("click", toggleTaskCompletion);
tasksList.addEventListener("click", deleteTask);
filters.addEventListener("click", (e) => {
  if (!e.target.classList.contains("filter-btn")) return;
  filterTasks(e.target.getAttribute("data-filter"));
});

// Initial render
renderTasks();
