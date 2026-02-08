import LS from "./modules/LS.js";
import App from "./modules/App.js";
import PubSub from "./modules/PubSub.js";
import UI from "./modules/UI.js";
import "./style.css";
import taskSectionComp from "./components/task-section/taskSectionComp.js";

// UI
document.querySelector("#root").innerHTML = `
${taskSectionComp().outerHTML}
`;

// LOGIC
LS.initStorage();
PubSub.subscriptions({
  "task-list-updated": UI.displayAllTask,
  "task-received": UI.displayTask,
  "task-list-received": UI.displayAllTask,
  "add-task-event": App.createTask,
  "delete-task-event": App.deleteTask,
  "update-task-event": App.updateTask,
});
UI.initEventListeners();
App.init();
