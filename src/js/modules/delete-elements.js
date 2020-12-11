import exportObject from './local-storage';

const deleteProjectButton = (projectsArray) => {
  const deleteButtons = document.querySelectorAll('.menu i');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const editProject = document.getElementById('edit-project-form');
      if (editProject !== null) return;
      const projectID = e.target.parentElement.dataset.id;
      const projectIndex = projectsArray.findIndex(
        (project) => project.id === projectID,
      );
      button.parentElement.remove();
      projectsArray.splice(projectIndex, 1);
      localStorage.setItem('db', JSON.stringify(exportObject(projectsArray)));
    });
  });
};

const deleteToDoButton = (projectsArray, project) => {
  const deleteButtons = document.querySelectorAll('.projects-list i');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const toDoID = e.target.parentElement.dataset.id;
      const toDoIndex = project
        .getTasks()
        .findIndex((todo) => todo.id === toDoID);
      button.parentElement.remove();
      project.removeTask(toDoIndex);
      localStorage.setItem('db', JSON.stringify(exportObject(projectsArray)));
    });
  });
};

export { deleteProjectButton, deleteToDoButton };
