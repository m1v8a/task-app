export default function taskFormComp() {
  const container = document.createElement("form");
  container.noValidate = true;
  container.action = "#";
  container.innerHTML = `
  <div>
    <input type="text" name="task-title-input">
    <textarea name="task-note-input"></textarea>
    <input type="date" name="task-due-input">
  </div>
  <div>
    <label>
      <input type="radio" value="1" name="task-priority-input">
      Urgent
    </label>
    <label>
      <input type="radio" value="2" name="task-priority-input">
      Should do
    </label>
    <label>
      <input type="radio" value="3"name="task-priority-input">
      Optional
    </label>
  </div>
  <div>
    <button data-name="add-task-submit">Add</button>
    <button class="bg-danger" data-name="close-task-form">X</button>
  </div>
  `;
  return container;
}
