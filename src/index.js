import './style.css';
import { createProject } from './project';
import { addTaskToProject } from './project';

const sidebar = document.getElementById('sidebar');
const projects = [];

/*const addProject = document.getElementById('addProject');*/
const addTask = document.getElementById('addTask');
const addForm = document.getElementById('addForm');

const addTaskButton = document.getElementById('addTaskButton');
addTaskButton.addEventListener("click", () => {
    addTask.showModal();
});

// Add Task Form Button
addTask.children[0].children[2].addEventListener("click", (event) => {
    event.preventDefault();
    addTask.close();

    const formData = new FormData(addForm, addTask.children[0].children[2]);
    // formData.get('title');
    // addTaskToProject(project, formdata stuff);
    // need dropdown for existing projects
});

function addNewProject() {
    projects.push(createProject("Family"));

    /*const temp = document.createElement("button");
    temp.textContent = projects[0].title;
    
    sidebar.appendChild(temp);*/
}

addNewProject("Family");

addTaskToProject(projects[0], "Brush Teeth", "Really get in there", "3 Minutes", "NOW");