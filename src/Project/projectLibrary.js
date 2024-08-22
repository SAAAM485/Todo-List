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
    todos,
    done
) {
    let project = new Project(
        title,
        description,
        date,
        dueDate,
        toDate,
        priority,
        todos,
        done
    );
    projectLibrary.splice(index, 1, project);
}

export { projectLibrary, updateProjectLibrary, editProjectLibrary };
