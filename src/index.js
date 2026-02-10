import "./style.css";
import LS from "./modules/LS.js";
import App from "./modules/App.js";
import PubSub from "./modules/PubSub.js";
import UI from "./modules/UI.js";
import taskSectionComp from "./components/task-section/taskSectionComp.js";
import projectSectionComp from "./components/project-section/projectSectionComp.js";

document.querySelector("#root").append(projectSectionComp(), taskSectionComp());

LS.initStorage();
PubSub.subscriptions({
  "task-list-updated": UI.displayAllTask,
  "project-list-updated": UI.displayAllProject,
  "task-received": UI.displayTask,
  "task-list-received": UI.displayAllTask,
  "project-list-received": UI.displayAllProject,
  "add-task-event": App.createTask,
  "add-project-event": App.createProject,
  "activate-project-event": App.activateProject,
  "delete-task-event": App.deleteTask,
  "update-task-event": App.updateTask,
  "complete-task-event": App.completeTask,
  "get-task-event": App.getTask,
});
UI.initEventListeners();
App.init();
