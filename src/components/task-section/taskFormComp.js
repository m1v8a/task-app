const randomTitles = [
  "Learn Javascript",
  "Build a website",
  "Take the dog to the vet",
];

export default function taskFormComp() {
  const container = document.createElement("form");
  container.noValidate = true;
  container.action = "#";
  container.className = "task-form";

  const randomTitle = randomTitles[Math.floor(Math.random() * 3)];
  const defaultDueValue = new Date().toISOString().slice(0, 10);

  container.innerHTML = `
  <div class="main-inputs">
    <input 
        type="text"
        name="task-title-input" 
        class="task-title-input" 
        placeholder="${randomTitle}">
    <textarea name="task-note-input" class="task-note-input" placeholder="Note..."></textarea>
    <input type="date" name="task-due-input" class="task-due-input" value="${defaultDueValue}">
  </div>
  <div class="second-inputs">
    <ul class="task-priority-input">
      <label>
        <input type="radio" value="1" name="task-priority-input">
        Urgent
      </label>
      <label>
        <input type="radio" value="2" name="task-priority-input">
        Should do
      </label>
      <label>
        <input type="radio" value="3" name="task-priority-input" checked>
        Optional
      </label>
    </ul>
  </div>
  <div class="task-buttons">
    <button class="btn" data-name="add-task-submit">Add</button>
    <!-- <button class="bg-danger" data-name="close-task-form">X</button> -->
  </div>
  `;
  return container;
}
