export default function getLocalStorage() {
  const projectLibrary = JSON.parse(
    localStorage.getItem("projectLibrary") || "[]",
  );

  const todoLibrary = JSON.parse(localStorage.getItem("todoLibrary") || "[]");

  return { projectLibrary, todoLibrary };
}
