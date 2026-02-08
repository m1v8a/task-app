export default function taskComp(task) {
  const container = document.createElement("li");
  const { title, note, due, priority, isCompleted } = task;

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  if (isCompleted) checkBox.checked = true;

  container.innerHTML = `
  <div class="task-header">
    <div>
      ${checkBox.outerHTML}
    </div>
    <div>
      <p>${title}</p>
    </div>
  </div>
  <div class="task-body">
    <div>
      <p>${note}</p>
    </div>
    <div>
      <button>Edit</button>
      <button>X</button>
    </div>
  </div>
  `;

  return container;
}
