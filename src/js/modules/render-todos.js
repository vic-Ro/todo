import toDoTemplate from './todos-template';

const renderToDos = (project) => {
  const projectsList = document.getElementById('projects-list');
  const fragment = document.createDocumentFragment();
  project.getTasks().forEach((task) => {
    fragment.appendChild(toDoTemplate(task));
  });
  projectsList.appendChild(fragment);
};

const renderOneToDo = (toDo) => {
  const projectsList = document.getElementById('projects-list');
  projectsList.appendChild(toDoTemplate(toDo));
};

export { renderToDos, renderOneToDo };
