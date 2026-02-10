import { ellipisVerticalIcon, pencilIcon, trashIcon } from "../utils/icons.js";

export default function projectComp(project) {
  const container = document.createElement("li");
  const { name, id, isActive } = project;

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
      <a href="#" class="option-button" data-name="project-option-button" data-id="${id}">
          ${ellipisVerticalIcon}
      </a>
      <div class="project-option-popup hidden" data-id="${id}">
        <a href="#" data-name="project-edit-button" data-id=${id}>
            ${pencilIcon}
        </a>
        <a href="#" data-name="project-delete-button" data-id="${id}">
            ${trashIcon}
        </a>
      </div>
    </div>
  `;

  return container;
}
