import './style.css';
import { createProject } from './project';
import { addTaskToProject } from './project';

const sidebar = document.getElementById('sidebar');
const projects = [];

function addNewProject() {
    projects.push(createProject("Family"));

    /*const temp = document.createElement("button");
    temp.textContent = projects[0].title;
    
    sidebar.appendChild(temp);*/
}

addNewProject("Family");

addTaskToProject(projects[0], "Brush Teeth", "Really get in there", "3 Minutes", "NOW");