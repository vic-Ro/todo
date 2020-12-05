const createToDo = (title, description, dueDate, priority) => {
  let isDone = false;
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
    updateIsDone,
    getIsDone,
  };
};

export default createToDo;
