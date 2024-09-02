import getLocalStorage from "../getLocalStorage.js";
import Project from "./project.js";

const projectLibrary = getLocalStorage().projectLibrary;

function updateProjectLibrary(
  title,
  description,
  date,
  dueDate,
  toDate,
  priority,
) {
  let project = new Project(
    title,
    description,
    date,
    dueDate,
    toDate,
    priority,
  );
  projectLibrary.push(project);
  localStorage.setItem("projectLibrary", JSON.stringify(projectLibrary));
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
  done,
) {
  let project = new Project(
    title,
    description,
    date,
    dueDate,
    toDate,
    priority,
    todos,
    done,
  );
  projectLibrary.splice(index, 1, project);
  localStorage.setItem("projectLibrary", JSON.stringify(projectLibrary));
}

export { projectLibrary, updateProjectLibrary, editProjectLibrary };
