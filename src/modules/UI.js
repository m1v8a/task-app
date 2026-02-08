import taskComp from "../components/task-section/taskComp.js";
import PubSub from "./PubSub.js";

export default class UI {
  static initEventListeners() {
    /* Event Listeners */
    window.addEventListener("click", (e) => {
      const target = e.target;
      const dataset = e.target.dataset;

      // add Task
      if (dataset.name === "add-task-submit") {
        e.preventDefault();
        const props = {
          title: document.querySelector('input[name="task-title-input"]').value,
          note: document.querySelector('textarea[name="task-note-input"]')
            .value,
          due: document.querySelector('input[name="task-due-input"]').value,
        };
        [...document.querySelectorAll('input[name="task-due-input"]')].forEach(
          (radio) => {
            if (radio.checked) {
              props.priority = radio.value;
            }
          }
        );
        PubSub.pub("add-task-event", props);
      }

      // delete task
      if (dataset.name === "remove-task-button") {
        PubSub.pub("delete-task-event", { id: dataset.id });
      }

      // complete task
      if (dataset.name === "complete-task-button") {
        PubSub.pub("complete-task-event", { id: dataset.id });
      }

      // option button
      if (dataset.name === "task-option-button") {
        document
          .querySelector(`.option-popup[data-id="${dataset.id}"]`)
          .classList.toggle("hidden");
      }

      // delete button
      if (dataset.name === "task-delete-button") {
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
