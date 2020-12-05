const createProject = (projectName, description) => {
  const tasks = [];
  const getProjectName = () => projectName;
  const getDescription = () => description;
  const getTasks = () => tasks;
  const addTasks = (toDo) => tasks.push(toDo);
  const removeTask = (toDoIndex) => tasks.splice(toDoIndex, 1);

  return {
    getProjectName,
    getDescription,
    getTasks,
    addTasks,
    removeTask,
  };
};
export default createProject;
