import renderProjects from "./render/renderProjects";

export default function clearProjectBar() {
  const projectBar = document.querySelector(".projectBar");
  while (projectBar.firstChild) {
    projectBar.removeChild(projectBar.lastChild);
  }
  const createProjectList = document.createElement("li");
  const createProjectBtn = document.createElement("button");
  createProjectBtn.textContent = "Projects";
  createProjectBtn.addEventListener("click", () => {
    renderProjects();
  });
  projectBar.appendChild(createProjectList);
  createProjectList.appendChild(createProjectBtn);
}
