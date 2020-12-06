import { nanoid } from 'nanoid';

const createToDo = (title, description, dueDate, priority) => {
  let isDone = false;
  const id = nanoid();
  const updateIsDone = () => {
    isDone = !isDone;
  };
  // const getProject = () => projectName;
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getIsDone = () => isDone;
  const getId = () => id;

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    updateIsDone,
    getIsDone,
    getId,
  };
};

export default createToDo;
