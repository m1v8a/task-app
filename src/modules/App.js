import Project from "../classes/Project.js";
import Task from "../classes/Task.js";
import LS from "./LS.js";
import PubSub from "./PubSub.js";

export default class App {
  static init() {
    this.getAllTask();
    this.getAllProject();
  }

  static createTask(props) {
    LS.update((data) => {
      const activeProject = data.projectList.filter((project) => {
        return project.isActive;
      })[0];
      const task = new Task({ ...props, projectId: activeProject.id });
      data.taskList.push(task);
      PubSub.pub("task-list-updated", {
        ...data,
        taskList: this.#filterTaskListByActiveProject(data),
      });
    });
  }

  static getAllTask() {
    const { taskList, projectList } = LS.get((data) => {
      return data;
    });
    PubSub.pub("task-list-received", {
      taskList: this.#filterTaskListByActiveProject({ projectList, taskList }),
    });
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
      PubSub.pub("task-list-updated", {
        ...data,
        taskList: this.#filterTaskListByActiveProject(data),
      });
    });
  }

  static deleteTask({ id }) {
    LS.update((data) => {
      data.taskList = data.taskList.filter((task) => {
        return task.id !== id;
      });
      PubSub.pub("task-list-updated", {
        ...data,
        taskList: this.#filterTaskListByActiveProject(data),
      });
    });
  }

  static createProject({ name }) {
    const project = new Project({ name });

    LS.update((data) => {
      data.projectList.push(project);
      PubSub.pub("project-list-updated", data);
    });

    this.activateProject({ id: project.id });
  }

  static deleteProject({ id }) {
    LS.update((data) => {
      data.projectList = data.projectList.filter((project) => {
        return project.id !== id;
      });
      data.taskList = data.taskList.filter((task) => {
        return task.projectId !== id;
      });
      PubSub.pub("project-list-updated", data);
    });

    this.activateProject({ id: "default" });
  }

  static getAllProject() {
    const projectList = LS.get((data) => {
      return data.projectList;
    });
    PubSub.pub("project-list-received", { projectList });
  }

  static activateProject({ id }) {
    LS.update((data) => {
      data.projectList = data.projectList.map((project) => {
        project.isActive = false;
        if (project.id === id) {
          project.isActive = true;
        }
        return project;
      });
      PubSub.pub("project-list-updated", data);
      PubSub.pub("task-list-updated", {
        ...data,
        taskList: this.#filterTaskListByActiveProject(data),
      });
    });
  }
  static #filterTaskListByActiveProject({ projectList, taskList }) {
    const activeProject = projectList.filter((project) => {
      return project.isActive;
    })[0];
    if (activeProject.id === "default") {
      return taskList;
    }

    return taskList.filter((task) => {
      return task.projectId === activeProject.id;
    });
  }
}
