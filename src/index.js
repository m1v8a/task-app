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
  "task-list-updated": (data) => UI.displayAllTask(data),
  "project-list-updated": (data) => UI.displayAllProject(data),
  "task-received": ({ task }) => UI.displayTask({ task }),
  "task-list-received": (data) => UI.displayAllTask(data),
  "project-list-received": (data) => UI.displayAllProject(data),
  "add-task-event": (props) => App.createTask(props),
  "add-project-event": ({ name }) => App.createProject({ name }),
  "activate-project-event": ({ id }) => App.activateProject({ id }),
  "delete-task-event": ({ id }) => App.deleteTask({ id }),
  "delete-project-event": ({ id }) => App.deleteProject({ id }),
  "update-task-event": ({ id, values }) => App.updateTask({ id, values }),
  "complete-task-event": ({ id }) => App.completeTask({ id }),
  "get-task-event": App.getTask,
});
UI.initEventListeners();
App.init();
