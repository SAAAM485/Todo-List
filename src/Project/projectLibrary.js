import Project from "./project.js";

const projectLibrary = [];

function updateProjectLibrary(
    title,
    description,
    date,
    dueDate,
    toDate,
    priority
) {
    let project = new Project(
        title,
        description,
        date,
        dueDate,
        toDate,
        priority
    );
    projectLibrary.push(project);
}

function editProjectLibrary(
    index,
    title,
    description,
    date,
    dueDate,
    toDate,
    priority,
    todos
) {
    let project = new Project(
        title,
        description,
        date,
        dueDate,
        toDate,
        priority,
        todos
    );
    projectLibrary.splice(index, 1, project);
}

function editProjectTodoLibrary (
    projectIndex,
    todoIndex,
    title,
    description,
    date,
    dueDate,
    toDate,
    priority
){
    let todo = new Todo(title, description, date, dueDate, toDate, priority);
    projectLibrary[projectIndex].todos.splice(todoIndex, 1, todo);
}

export { projectLibrary, updateProjectLibrary, editProjectLibrary, editProjectTodoLibrary };
