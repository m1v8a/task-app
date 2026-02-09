export default class Task {
  constructor({ title, note, due, priority, projectId }) {
    this.title = title;
    this.note = note;
    this.due = due;
    this.priority = priority;
    this.isCompleted = false;
    this.id = crypto.randomUUID();
    this.projectId = projectId;
  }
}
