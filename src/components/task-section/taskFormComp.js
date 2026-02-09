const randomTitles = [
  "Learn Javascript",
  "Build a website",
  "Take the dog to the vet",
];

export default function taskFormComp({ mode, task }) {
  const container = document.createElement("form");
  container.noValidate = true;
  container.action = "#";
  container.className = "task-form";
  let titleValue;
  let noteValue;
  let dueValue;
  let priorityValue;
  let mainButton;
  if (mode && mode === "edit") {
    mainButton = `
      <button class="btn" data-name="task-edit-submit" data-id="${task.id}">Edit</button>
      <button class="btn bg-danger" data-name="task-form-close">X</button> 
      `;
    titleValue = task.title;
    dueValue = task.due;
    noteValue = task.note ?? "";
    priorityValue = Number(task.priority);
  } else {
    dueValue = new Date().toISOString().slice(0, 10);
    noteValue = "";
    priorityValue = 3;
    mainButton = `<button class="btn" data-name="add-task-submit">Add</button>`;
  }

  container.innerHTML = `
  <div class="main-inputs">
    <input 
        type="text"
        name="task-title-input" 
        class="task-title-input" 
        placeholder="${randomTitles[Math.floor(Math.random() * 3)]}"
        value="${titleValue ?? ""}"
    > 
    <textarea name="task-note-input" class="task-note-input" placeholder="Note...">${noteValue}</textarea>
    <input type="date" name="task-due-input" class="task-due-input" value="${dueValue}">
  </div>
  <div class="second-inputs">
    <ul class="task-priority-input">
      <label>
        <input type="radio" value="1" name="task-priority-input" ${priorityValue === 1 ? "checked" : ""}>
        Urgent
      </label>
      <label>
        <input type="radio" value="2" name="task-priority-input" ${priorityValue === 2 ? "checked" : ""}>
        Should do
      </label>
      <label>
        <input type="radio" value="3" name="task-priority-input" ${priorityValue === 3 || !priorityValue ? "checked" : ""}>
        Optional
      </label>
    </ul>
  </div>
  <div class="task-buttons">
    ${mainButton}
    <!-- <button class="bg-danger" data-name="close-task-form">X</button> -->
  </div>
  `;
  return container;
}
