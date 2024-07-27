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

const testingTask = document.getElementById('task');
const testingTaskDesc = document.getElementById('task-desc');

testingTask.addEventListener("click", () => {
    testingTaskDesc.classList.toggle("selected");
});