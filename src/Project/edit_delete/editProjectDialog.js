import { editProjectAddHandler } from "./editProject";

export default function editProjectDialog(index, method) {
    const todoDialog = document.querySelector("dialog");
    const dialogTitle = document.querySelector("h1");
    const dialogForm = document.querySelector("form");
    dialogTitle.textContent = `Please Edit The ${sort[sortIndex].title} Todo Info`;
    const dateInput = document.querySelector('input[name="due_date"]');
    const now = new Date(Date.now())
        .toISOString()
        .split("T")[0]
        .toLocaleString([], {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        });
    dateInput.min = now;
    dateInput.max = "";
    todoDialog.showModal();

    const addBtn = document.querySelector("#add_btn");
    addBtn.addEventListener(
        "click",
        (event) => {
            editProjectAddHandler(event, index);
            dialogForm.reset();
        },
        { once: true }
    );
}
