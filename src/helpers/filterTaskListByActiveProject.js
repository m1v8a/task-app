export default function filterTaskListByActiveProject({
  projectList,
  taskList,
}) {
  const activeProject = projectList.filter((project) => {
    return project.isActive;
  })[0];
  console.log(activeProject);
  if (activeProject.id === "default") {
    return taskList;
  }

  return taskList.filter((task) => {
    return task.projectId === activeProject.id;
  });
}
