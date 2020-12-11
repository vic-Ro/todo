const getAllTasks = (project) => {
  const arr = [];
  project.getTasks().forEach((task) => {
    arr.push({
      title: task.getTitle(),
      description: task.getDescription(),
      dueDate: task.getDueDate(),
      priority: task.getPriority(),
      isDone: task.getIsDone(),
    });
  });
  return arr;
};

const exportObject = (projectsArray) => {
  const arr = [];
  projectsArray.forEach((project) => {
    arr.push({
      name: project.getProjectName(),
      description: project.getDescription(),
      tasks: getAllTasks(project),
    });
  });
  return arr;
};

export default exportObject;
