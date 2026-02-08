import taskComp from "../components/task-section/taskComp.js";
import PubSub from "./PubSub.js";

export default class UI {
  static initEventListeners() {
    /* Event Listeners */
    window.addEventListener("click", (e) => {
      const target = e.target;
      const dataset = e.target.dataset;

      // add Task
      if (dataset.name === "add-task-submit-button") {
        const props = { title: "Test", note: "test note" }; // test data
        PubSub.pub("add-task-event", props);
      }

      // delete task
      if (dataset.name === "remove-task-button") {
        PubSub.pub("delete-task-event", { id: dataset.id });
      }
    });
  }

  static displayTask({ task }) {
    console.log("TASK DISPLAYED: ", task);
  }

  static displayAllTask({ taskList }) {
    const container = document.querySelector("#task-list-container");
    container.innerHTML = "";

    if (taskList.length) {
      taskList.forEach((task) => {
        container.append(taskComp(task));
      });
    } else {
      container.innerHTML = "<l1>No Task</li>";
    }
  }
}
