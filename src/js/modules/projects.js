import { nanoid } from 'nanoid';

const createProject = (projectName, projectDescription) => {
  const tasks = [];
  const id = nanoid();
  let name = projectName;
  let description = projectDescription;
  const getProjectName = () => name;
  const getDescription = () => description;
  const updateName = (newName) => {
    name = newName;
  };
  const updateDescription = (newDescription) => {
    description = newDescription;
  };
  const getTasks = () => tasks;
  const addTasks = (toDo) => tasks.push(toDo);
  const removeTask = (toDoIndex) => tasks.splice(toDoIndex, 1);

  return {
    getProjectName,
    updateName,
    getDescription,
    updateDescription,
    id,
    getTasks,
    addTasks,
    removeTask,
  };
};
export default createProject;
