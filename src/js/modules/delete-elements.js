const deleteProjectButton = (projectsArray) => {
  const deleteButtons = document.querySelectorAll('.menu i');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const projectID = e.target.parentElement.dataset.id;
      const projectIndex = projectsArray.findIndex((project) => project.id === projectID);
      button.parentElement.remove();
      projectsArray.splice(projectIndex, 1);
    });
  });
};

const deleteToDoButton = (project) => {
  const deleteButtons = document.querySelectorAll('.projects-list i');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const toDoID = e.target.parentElement.dataset.id;
      const toDoIndex = project.getTasks().findIndex((todo) => todo.id === toDoID);
      button.parentElement.remove();
      project.removeTask(toDoIndex);
    });
  });
};

export { deleteProjectButton, deleteToDoButton };
