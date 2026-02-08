import PubSub from "./PubSub.js";

export default class UI {
  static initEventListeners() {
    /* Event Listeners */
    window.addEventListener("click", (e) => {
      const target = e.target;
      const dataset = e.target.dataset;

      // add Task
      if (dataset.name === "add-task-button") {
        const props = { title: "Test", note: "test note" }; // test data
        PubSub.pub("add-task-event", props);
      }

      // delete task
      if (dataset.name === "remove-task-button") {
        PubSub.pub("delete-task-event", { id: dataset.id });
      }
    });
  }

  static displayTask(task) {
    console.log("TASK DISPLAYED: ", task);
  }

  static displayAllTask(taskList) {
    console.log("TASK_LIST DISPLAYED: ", taskList);
  }
}
