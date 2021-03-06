import { projectTemplate, toDoTemplate } from './templates';
import { deleteProjectButton, deleteToDoButton } from './delete-elements';
import { todoCheckBoxListener } from './todos-listeners';
import editTodoListener from './edit-todo';
import { expandListener } from './todos-listeners';

const renderProjects = (projectsArray) => {
  const projectsList = document.getElementById('menu');
  const fragment = document.createDocumentFragment();
  projectsArray.forEach((project) => {
    fragment.appendChild(projectTemplate(project));
  });
  projectsList.append(fragment);
  deleteProjectButton(projectsArray);
  const newSelected = [...document.querySelectorAll('.menu__item')];
  newSelected[0].click();
};

const renderToDos = (projectsArray, project) => {
  const projectsList = document.getElementById('projects-list');
  const fragment = document.createDocumentFragment();
  project.getTasks().forEach((task) => {
    fragment.appendChild(toDoTemplate(task));
  });
  projectsList.appendChild(fragment);
  deleteToDoButton(projectsArray, project);
  todoCheckBoxListener(projectsArray, project);
  editTodoListener(projectsArray, project);
  expandListener();
};

const renderListTitle = (project) => {
  const listTitle = document.querySelector('.main__title');
  const listSubtitle = document.querySelector('.main__subtitle');
  listTitle.textContent = project.getProjectName();
  listSubtitle.textContent = project.getDescription();
};

export { renderProjects, renderToDos, renderListTitle };
