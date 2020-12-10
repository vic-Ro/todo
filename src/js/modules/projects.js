import { nanoid } from 'nanoid';

const createProject = (projectName, description) => {
  const tasks = [];
  const id = nanoid();
  const getProjectName = () => projectName;
  const getDescription = () => description;
  const getTasks = () => tasks;
  const addTasks = (toDo) => tasks.push(toDo);
  const removeTask = (toDoIndex) => tasks.splice(toDoIndex, 1);

  return {
    getProjectName,
    getDescription,
    getTasks,
    id,
    addTasks,
    removeTask,
  };
};
export default createProject;
