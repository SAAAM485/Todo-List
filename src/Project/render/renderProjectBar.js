import clearProjectBar from "../clearProjectBar.js";
import { projectLibrary } from "../projectLibrary.js";
import renderProjectPage from "./renderProjectPage.js";

export default function renderProjectBar() {
  clearProjectBar();
  const projectBar = document.querySelector(".projectBar");
  for (let i = 0; i < projectLibrary.length; i++) {
    const projectList = document.createElement("li");
    const projectBtn = document.createElement("button");
    projectBtn.textContent =
      projectLibrary[i].title + "..." + projectLibrary[i].toDate;
    projectBar.appendChild(projectList);
    projectList.appendChild(projectBtn);
    projectBtn.addEventListener("click", () => {
      renderProjectPage(i);
    });
    if (projectLibrary[i].done === true) {
      projectBtn.classList.add("done");
    }
  }
}
