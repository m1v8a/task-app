export default class Project {
  constructor({ name, id = crypto.randomUUID(), isActive = false }) {
    this.name = name;
    this.id = id;
    this.isActive = isActive;
  }
}
