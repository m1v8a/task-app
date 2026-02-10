import { ellipisVerticalIcon, pencilIcon, trashIcon } from "../utils/icons.js";

export default function projectComp(project) {
  const container = document.createElement("li");
  const { name, id, isActive } = project;

  const deleteButton = `
    <a href="#" data-name="project-delete-button" data-id="${id}">
      ${trashIcon}
    </a>
  `;

  container.className = `project ${isActive ? "active" : ""}`;
  container.dataset.id = id;
  container.dataset.name = "project-activate-button";
  container.innerHTML = `
    <div class="info-cont>
      <div class="project-content">
        <p class="project-title">${name}</p>
      </div>
    </div>
    <div class="buttons-cont">
      ${id !== "default" ? deleteButton : ""}
    </div>
  `;

  return container;
}
