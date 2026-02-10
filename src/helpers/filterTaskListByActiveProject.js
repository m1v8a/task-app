export default function filterTaskListByActiveProject({
  projectList,
  taskList,
}) {
  const activeProject = projectList.filter((project) => {
    return project.isActive;
  })[0];

  console.log(activeProject, taskList);
  return taskList.filter((task) => {
    return task.projectId === activeProject.id;
  });
}
