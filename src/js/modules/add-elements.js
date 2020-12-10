import createProject from './projects';
import createToDo from './todos';
import { renderToDos, renderProjects } from './render';
import { clearToDos, clearProjects } from './clear-dom';

const addProject = (projectsArray, name, description) => {
  projectsArray.push(createProject(name, description));
  clearProjects();
  renderProjects(projectsArray);
};

const addToDo = (projectsArray, name, description, dueDate) => {
  const priorityChosen = [...document.getElementsByName('priority')].filter(
    (input) => input.checked === true,
  );
  const projectID = document.querySelector('.menu__item--active').dataset.id;
  const index = projectsArray.findIndex(((project) => project.id === projectID));
  projectsArray[index].addTasks(
    createToDo(
      name.value,
      description.value,
      dueDate.value,
      priorityChosen[0].defaultValue,
    ),
  );
  clearToDos();
  renderToDos(projectsArray[index]);
};

export { addProject, addToDo };
