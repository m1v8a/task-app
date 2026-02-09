import { trashIcon, pencilIcon, ellipisVerticalIcon } from "../utils/icons.js";

export default function taskComp(task) {
  const container = document.createElement("li");
  const { title, note, due, priority, isCompleted, id } = task;

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.dataset.name = "complete-task-button";
  checkBox.dataset.id = id;
  if (isCompleted) {
    checkBox.setAttribute("checked", true);
  }

  container.className = "task";
  container.dataset.id = id;
  container.innerHTML = `
    <div class="checkbox-cont">
      ${checkBox.outerHTML}
    </div>
    <div class="info-cont">
      <div class="task-content">
        <p class="task-title">${title}</p>
        <p class="task-note">${note}</p> 
      </div>
      <div>
        <p>${due}</p>
      </div>
    </div>
    <div class="buttons-cont">
      <a href="#" class="option-button" data-name="task-option-button" data-id="${id}">
          ${ellipisVerticalIcon}
      </a>
      <div class="option-popup hidden" data-id="${id}">
        <a href="#" data-name="task-edit-button" data-id=${id}>
            ${pencilIcon}
        </a>
        <a href="#" data-name="task-delete-button" data-id="${id}">
            ${trashIcon}
        </a>
      </div>
    </div>
  `;

  return container;
}
