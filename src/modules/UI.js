import taskComp from "../components/task-section/taskComp.js";
import taskFormComp from "../components/task-section/taskFormComp.js";
import App from "./App.js";
import PubSub from "./PubSub.js";

export default class UI {
  static #rootElement = document.querySelector("#root");

  static initEventListeners() {
    /* Event Listeners */
    window.addEventListener("click", (e) => {
      const target = e.target;
      const dataset = e.target.dataset;

      // add Task
      if (dataset.name === "add-task-submit") {
        e.preventDefault();
        const props = getInputValues(document);
        PubSub.pub("add-task-event", props);
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

      // open task for for editting
      if (dataset.name === "task-edit-button") {
        const task = App.getTask({ id: dataset.id });
        const taskForm = taskFormComp({ mode: "edit", task });
        taskForm.id = "task-edit-form";
        this.#rootElement.append(taskForm);
      }

      // edit submit
      if (dataset.name === "task-edit-submit") {
        e.preventDefault();
        const taskForm = document.querySelector("#task-edit-form");
        const props = getInputValues(taskForm);
        PubSub.pub("update-task-event", { id: dataset.id, values: props });
        taskForm.remove();
      }

      // close edit task form
      if (dataset.name === "task-form-close") {
        const taskForm = document.querySelector("#task-edit-form");
        taskForm.remove();
      }
    });

    function getInputValues(inputsParent) {
      const props = {
        title: inputsParent.querySelector('input[name="task-title-input"]')
          .value,
        note: inputsParent.querySelector('textarea[name="task-note-input"]')
          .value,
        due: inputsParent.querySelector('input[name="task-due-input"]').value,
      };
      [
        ...inputsParent.querySelectorAll('input[name="task-priority-input"]'),
      ].forEach((radio) => {
        if (radio.checked) {
          props.priority = radio.value;
        }
      });
      return props;
    }
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
