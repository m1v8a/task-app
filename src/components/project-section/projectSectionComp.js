import projectFormComp from "./projectFormComp.js";
import projectListComp from "./projectListComp.js";
import "./style.css";

export default function projectSectionComp(projectList) {
  const container = document.createElement("nav");
  container.id = "project-section";

  container.append(projectFormComp(), projectListComp(projectList));

  return container;
}
