import './style.css';
import { createProject } from './project';
import { addTaskToProject } from './project';

const sidebar = document.getElementById('sidebar');
const projects = [];

/*const addProject = document.getElementById('addProject');*/
const addTask = document.getElementById('addTask');
const addForm = document.getElementById('addForm');

// Dropdown menu
const dropdown = document.getElementById('selectProj');

// Add task - sidebar button
const addTaskButton = document.getElementById('addTaskButton');
addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    // Updates dropdown menu before showing
    var str = "";
    for (let project of projects) {
        str += `<option>${project.title}</option>`;
    }
    dropdown.innerHTML = str;

    addTask.showModal();
});

// Add Task Form Button

addTask.children[0].children[3].addEventListener("click", (event) => {
    event.preventDefault();
    addTask.close();

    //const formData = new FormData(addForm, addTask.children[0].children[2]);
    // formData.get('title');
    // addTaskToProject(project, formdata stuff);
    // need dropdown for existing projects
    addForm.reset();
});

// Adding new projects

function addNewProject(text) {
    projects.push(createProject(text));

    const temp = document.createElement("button");
    temp.textContent = text
    
    sidebar.children[2].appendChild(temp);
}

addNewProject("Family");
addTaskToProject(projects[0], "Brush Teeth", "Really get in there", "3 Minutes", "NOW");

addNewProject("Work");
addTaskToProject(projects[1], "Finish ToDo List", "It's important", "yeah", "mhm");

// Display project using tasks built into elements

const mainContent = document.getElementById("main-content");

function buildTask(project) {
    // Container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");
    taskContainer.setAttribute("id", "task");

    // Main Task
    const taskMain = document.createElement("div");
    taskMain.classList.add("task-main");

    // Checkbox for finished task
    const finished = document.createElement("input");
    finished.type = "checkbox";
    finished.name = "finished";
    finished.id = "finished";

    taskMain.appendChild(finished);

    const taskTitle = document.createElement("p");
    taskTitle.textContent = projects[0].tasks[0].getName();

    taskMain.appendChild(taskTitle);

    const taskDueDate = document.createElement("p");
    taskDueDate.classList.add("date");
    taskDueDate.textContent = projects[0].tasks[0].getDueDate();

    taskMain.appendChild(taskDueDate);

    taskContainer.appendChild(taskMain);

    // Task description is separate from task main
    
    const taskDesc = document.createElement("p");
    taskDesc.classList.add("task-desc");
    taskDesc.id = "task-desc";
    taskDesc.textContent = projects[0].tasks[0].getDesc();

    taskContainer.addEventListener("click", () => {
        taskDesc.classList.toggle("selected");
    });

    taskContainer.appendChild(taskDesc);

    return taskContainer;
}

function displayProject(project) {
    mainContent.innerHTML = '';

    const heading = document.createElement("h1");
    heading.textContent = project.title;

    // add task description

    mainContent.appendChild(heading);
    mainContent.appendChild(buildTask(project));
}

displayProject(projects[0]);