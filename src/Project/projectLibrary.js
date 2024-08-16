import Project from "./project.js";

const projectLibrary = [];

function updateProjectLibrary(title, description, dueDate, priority) {
    let project = new Project(title, description, dueDate, priority);
    projectLibrary.push([]);
    projectLibrary[projectLibrary.length-1].push(project);
}

export { projectLibrary, updateProjectLibrary };