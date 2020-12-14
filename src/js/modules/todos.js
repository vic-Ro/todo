import { nanoid } from 'nanoid';

const createToDo = (todoTitle, todoDescription, todoDueDate, todoPriority, done) => {
  let title = todoTitle;
  let description = todoDescription;
  let dueDate = todoDueDate;
  let priority = todoPriority;
  let isDone = done;
  const id = nanoid();
  const updateTitle = (newTitle) => {
    title = newTitle;
  };
  const updateDescription = (newDescription) => {
    description = newDescription;
  };
  const updateDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const updatePriority = (newPriority) => {
    priority = newPriority;
  };
  const updateIsDone = () => {
    isDone = !isDone;
  };
  // const getProject = () => projectName;
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getIsDone = () => isDone;

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getIsDone,
    updateIsDone,
    updateTitle,
    updateDescription,
    updateDueDate,
    updatePriority,
    id,
  };
};

export default createToDo;
