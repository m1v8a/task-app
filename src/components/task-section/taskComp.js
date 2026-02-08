import { trashIcon, pencilIcon } from "../utils/icons.js";

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
      <button class="option-button" data-name="task-option-button" data-id="${id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 144a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0 224c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56zm56-112c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56z"/></svg>
      </button>
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
