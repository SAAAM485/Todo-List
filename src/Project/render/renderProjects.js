import { projectLibrary } from "../projectLibrary";
import createCards from "../../Todo/createCards";
import deleteProject from "../edit_delete/deleteProject";
import renderProjectBar from "./renderProjectBar";
import clearPage from "../../clearPage";
import editProjectDialog from "../edit_delete/editProjectDialog";
import { editProject } from "../edit_delete/editProject";
import renderProjectPage from "./renderProjectPage";

export default function renderProjects() {
  clearPage();
  projectLibrary.forEach((project, index) => {
    let card = createCards(
      project.title,
      project.description,
      project.dueDate,
      project.toDate,
      project.priority,
      project.done,
    );
    card.doneBtn.addEventListener("click", () => {
      projectLibrary[index].done = true;
      projectLibrary[index].todos.forEach((todo) => {
        todo.done = true;
      });
    });
    card.delBtn.addEventListener("click", () => {
      deleteProject(index);
      renderProjectBar();
      renderProjects();
    });
    card.editBtn.addEventListener("click", () => {
      editProject(index);
      editProjectDialog(index, method);
      renderProjectBar();
    });
    const addTodo = document.createElement("button");
    addTodo.textContent = "+";

    addTodo.addEventListener("click", () => {
      projectTodoDialog(index);
    });

    card.cardDiv.addEventListener("click", () => {
      renderProjectPage(index);
    });
  });
}
