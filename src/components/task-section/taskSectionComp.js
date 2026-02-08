import taskFormComp from "./taskFormComp.js";
import taskListComp from "./taskListComp.js";
import "./style.css";

export default function taskSectionComp() {
  const container = document.createElement("section");

  container.id = "task-section";

  container.innerHTML = `
    ${taskFormComp().outerHTML}
    ${taskListComp().outerHTML}
  `;

  return container;
}
