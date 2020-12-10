import createProject from './projects';
import createToDo from './todos';
import { renderToDos, renderProjects } from './render';
import { clearToDos, clearProjects } from './clear-dom';
import exportObject from './local-storage';

const addProject = (projectsArray, name, description) => {
  projectsArray.push(createProject(name, description));
  const isSelected = document.querySelector('.menu__item--active');
  clearProjects();
  renderProjects(projectsArray);
  if (isSelected !== null) {
    const [newSelected] = [...document.querySelectorAll('.menu__item')].filter(
      (element) => element.dataset.id === isSelected.dataset.id,
    );
    if (newSelected !== undefined) newSelected.click();
  }
  localStorage.setItem('db', JSON.stringify(exportObject(projectsArray)));
};

const addToDo = (projectsArray, name, description, dueDate) => {
  const priorityChosen = [...document.getElementsByName('priority')].filter(
    (input) => input.checked === true,
  );
  const projectID = document.querySelector('.menu__item--active').dataset.id;
  const index = projectsArray.findIndex((project) => project.id === projectID);
  projectsArray[index].addTasks(
    createToDo(
      name.value,
      description.value,
      dueDate.value,
      priorityChosen[0].defaultValue,
    ),
  );
  clearToDos();
  renderToDos(projectsArray, projectsArray[index]);
  localStorage.setItem('db', JSON.stringify(exportObject(projectsArray)));
};

export { addProject, addToDo };
