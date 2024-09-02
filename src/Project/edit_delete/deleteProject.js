import { projectLibrary } from "../projectLibrary";

export default function deleteProject(index) {
  projectLibrary.splice(index, 1);
}
