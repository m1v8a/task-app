import Project from "../classes/Project.js";
import Task from "../classes/Task.js";
import LS from "./LS.js";
import PubSub from "./PubSub.js";

export default class App {
  static init() {
    this.getAllTask();
  }

  static createTask(props) {
    LS.update((data) => {
      const task = new Task(props);
      data.taskList.push(task);
      PubSub.pub("task-list-updated", data);
    });
  }

  static getAllTask() {
    const returnedTaskList = LS.get((data) => {
      return data.taskList;
    });
    PubSub.pub("task-list-received", { taskList: returnedTaskList });
  }

  static getTask({ id }) {
    const returnedTask = LS.get((data) => {
      const taskList = data.taskList;
      for (let i = 0; taskList.length; i++) {
        const task = taskList[i];
        if (task.id === id) return task;
      }
    });
    PubSub.pub("task-received", { task: returnedTask });
    return returnedTask;
  }

  static updateTask({ id, values }) {
    LS.update((data) => {
      data.taskList = data.taskList.map((task) => {
        if (task.id === id) {
          return Object.assign(task, values);
        }
        return task;
      });
      PubSub.pub("task-list-updated", data);
    });
  }

  static completeTask({ id }) {
    LS.update((data) => {
      data.taskList = data.taskList.map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
      PubSub.pub("task-list-updated", data);
    });
  }

  static deleteTask({ id }) {
    LS.update((data) => {
      data.taskList = data.taskList.filter((task) => {
        return task.id !== id;
      });
      PubSub.pub("task-list-updated", data);
    });
  }

  static createProject({ name }) {
    LS.update((data) => {
      data.projects.push(new Project({ name }));
      PubSub.pub("project-list-updated", data);
    });
  }
}
