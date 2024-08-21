import clearProjectBar from "../clearProjectBar.js";
import { projectLibrary } from "../projectLibrary.js";
import renderProjectPage from "./renderProjectPage.js";

export default function renderProjectBar() {
    clearProjectBar();
    const projectBar = document.querySelector(".projectBar");
    for (let i = 0; i < projectLibrary.length; i++) {
        const createProjectList = document.createElement("li");
        const createProjectBtn = document.createElement("button");
        createProjectBtn.textContent =
            projectLibrary[i].title + "..." + projectLibrary[i].toDate;
        projectBar.appendChild(createProjectList);
        createProjectList.appendChild(createProjectBtn);
        createProjectBtn.addEventListener("click", () => {
            renderProjectPage(i);
        });
    }
}
