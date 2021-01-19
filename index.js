import Task from "./task";
import Project from "./project";
import displayTasks from "./displayTasks";
import displayProjects from "./displayProjects";
import addTaskToList from "./addTaskToList";
import loadProjects from "./loadProjects";
import saveProjects from "./saveProjects";
import saveIDs from "./saveIDs";
import mobileCloseSidebar from './mobileCloseSidebar';
import "./reset.css";
import "./style.css";

let taskID = JSON.parse(localStorage.getItem("taskID")) || 0;
let projects;
if (localStorage.getItem("projects") === null) {
  projects = { 0: Project("default", 0) }; // Default project
} else {
  projects = loadProjects(localStorage.getItem("projects"));
}
let projectID = JSON.parse(localStorage.getItem("projectID")) || 1;
let currentProject = projects[0]; // Default project

displayTasks(currentProject.getTasks());
displayProjects(projects);

const newBtn = document.getElementById("new-task");
const taskForm = document.getElementById("form-container");
const editForm = document.getElementById("edit-container");
newBtn.onclick = () => {
  taskForm.style.display = "flex";
  document.getElementById("task-form").reset();
  mobileCloseSidebar();
};

const closeBtn = document.getElementById("close-form");
closeBtn.onclick = () => {
  taskForm.style.display = "none";
};

const closeBtn2 = document.getElementById("close-edit");
closeBtn2.onclick = () => {
  editForm.style.display = "none";
};

const createBtn = document.getElementById("create-task");
createBtn.onclick = (e) => {
  e.preventDefault();
  const form = document.getElementById("task-form");
  const task = Task(
    form.title.value,
    form.description.value,
    form.dueDate.value,
    form.priority.value
  );
  addTaskToList(currentProject.getTasks(), task, taskID);
  taskID += 1;
  saveProjects(projects);
  saveIDs(taskID, projectID);
  form.reset();
  displayTasks(currentProject.getTasks());
  if (window.innerWidth <= 680) {
    taskForm.style.display='none';
  }
};

document.getElementById("notes").onclick = (event) => {
  if (event.target.getAttribute("class") === "task-link") {
    const { id } = event.target;
    const task = currentProject.getTasks()[parseInt(id, 10)];
    const form = document.getElementById("edit-form");
    form.editId.value = id;
    form.title.value = task.getTitle();
    form.description.value = task.getDescription();
    form.dueDate.value = task.getDueDate();
    const currentPriority = task.getPriority().toLowerCase();
    const { priority } = form;
    for (let i, j = 0; (i = priority.options[j]); j++) {
      if (i.value == currentPriority) {
        priority.selectedIndex = j;
        break;
      }
    }
    document.getElementById("edit-container").style.display = "flex";
  } else if (event.target.getAttribute("class") === "status-button") {
    const task = currentProject.getTasks()[event.target.id];
    task.toggleCompleted();
    saveProjects(projects);
    displayTasks(currentProject.getTasks());
  }
};

const updateBtn = document.getElementById("update-task");
updateBtn.onclick = (e) => {
  e.preventDefault();
  const form = document.getElementById("edit-form");
  const task = currentProject.getTasks()[form.editId.value];
  task.update(
    form.title.value,
    form.description.value,
    form.dueDate.value,
    form.priority.value
  );
  saveProjects(projects);
  displayTasks(currentProject.getTasks());
};

const deleteBtn = document.getElementById("delete-task");
deleteBtn.onclick = (e) => {
  e.preventDefault();
  const form = document.getElementById("edit-form");
  const id = form.editId.value;
  delete currentProject.getTasks()[id];
  saveProjects(projects);
  editForm.style.display = "none";
  displayTasks(currentProject.getTasks());
};

const defaultBtn = document.getElementById("default-tasks");
defaultBtn.onclick = (e) => {
  e.preventDefault();
  const header = document.getElementById("main-header");
  header.innerHTML = "Tasks";
  currentProject = projects[0];
  displayTasks(currentProject.getTasks());
  mobileCloseSidebar();
};

const newProjectBtn = document.getElementById("new-project");
const projectForm = document.getElementById("project-container");
newProjectBtn.onclick = () => {
  projectForm.style.display = "flex";
  mobileCloseSidebar();
};

const closeProjectBtn = document.getElementById("close-project");
closeProjectBtn.onclick = () => {
  projectForm.style.display = "none";
};

const createProjectBtn = document.getElementById("create-project");
createProjectBtn.onclick = (e) => {
  e.preventDefault();
  const form = document.getElementById("project-form");
  const project = Project(form.projectName.value, projectID);
  projects[projectID] = project;
  const sidebar = document.getElementById("sidebar");
  const projectBtn = document.createElement("button");
  projectBtn.innerHTML = project.getName();
  projectBtn.id = projectID;
  projectBtn.classList.add("project-button");
  projectID += 1;

  saveProjects(projects);

  sidebar.appendChild(projectBtn);
  if (window.innerWidth <= 680) {
    projectForm.style.display='none';
  }
};

document.getElementById("sidebar").onclick = (e) => {
  if (e.target.getAttribute("class") === "project-button") {
    const project = projects[e.target.id];
    const header = document.getElementById("main-header");
    header.innerHTML = project.getName();
    currentProject = project;
    displayTasks(currentProject.getTasks());
    mobileCloseSidebar();
  }
};

const menuBtn = document.getElementById("menu");
menuBtn.onclick = () => {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.display === "flex") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "flex";
  }
};
