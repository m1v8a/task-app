import Project from "../classes/Project.js";

export default class LS {
  static #APP = "task-app";

  static initStorage() {
    if (!localStorage.getItem(this.#APP)) {
      localStorage.setItem(
        this.#APP,
        JSON.stringify({
          taskList: [],
          projectList: [
            new Project({ name: "All", id: "default", isActive: true }),
          ],
        })
      );
    }
  }
  static update(fn) {
    const data = JSON.parse(localStorage.getItem(this.#APP));
    fn(data);

    localStorage.setItem(this.#APP, JSON.stringify(data));
  }

  static get(fn) {
    const data = JSON.parse(localStorage.getItem(this.#APP));
    return fn(data);
  }
}
