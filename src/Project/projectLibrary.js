import Project from "./project.js";

const projectLibrary = [];

function updateProjectLibrary(title, description, date, dueDate, toDate, priority) {
    let project = new Project(title, description, date, dueDate, toDate, priority);
    projectLibrary.push(project);
}

export { projectLibrary, updateProjectLibrary };