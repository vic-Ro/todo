import { projectTemplate, toDoTemplate } from './templates';

const renderAllProjects = (projectsArray) => {
  const projectsList = document.getElementById('menu');
  const fragment = document.createDocumentFragment();
  projectsArray.forEach((project) => {
    fragment.appendChild(projectTemplate(project));
  });
  projectsList.lastChild.before(fragment);
};

const renderOneProject = (project) => {
  const projectsList = document.getElementById('menu');
  projectsList.lastChild.before(projectTemplate(project));
};

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

export { renderAllProjects, renderOneProject, renderToDos, renderOneToDo };
