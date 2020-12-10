import { projectTemplate, toDoTemplate } from './templates';
import { deleteProjectButton, deleteToDoButton } from './delete-elements';

const renderProjects = (projectsArray) => {
  const projectsList = document.getElementById('menu');
  const fragment = document.createDocumentFragment();
  projectsArray.forEach((project) => {
    fragment.appendChild(projectTemplate(project));
  });
  projectsList.append(fragment);
  deleteProjectButton(projectsArray);
};

const renderToDos = (project) => {
  const projectsList = document.getElementById('projects-list');
  const fragment = document.createDocumentFragment();
  project.getTasks().forEach((task) => {
    fragment.appendChild(toDoTemplate(task));
  });
  projectsList.appendChild(fragment);
  deleteToDoButton(project);
};

const renderListTitle = (project) => {
  const listTitle = document.querySelector('.main__title');
  const listSubtitle = document.querySelector('.main__subtitle');
  listTitle.textContent = project.getProjectName();
  listSubtitle.textContent = project.getDescription();
};

export {
  renderProjects,
  renderToDos,
  renderListTitle,
};
