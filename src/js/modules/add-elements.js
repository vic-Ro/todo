import createProject from './projects';
import createToDo from './todos';
import { renderOneToDo, renderOneProject } from './render';

const addProject = (projectsArray, name, description) => {
  projectsArray.push(createProject(name, description));
  renderOneProject(projectsArray[projectsArray.length - 1]);
};

const addToDo = (project, name, description, dueDate) => {
  const form = document.getElementById('todos-form');
  const priorityChosen = [...document.getElementsByName('priority')].filter(
    (input) => input.checked === true,
  );
  project.addTasks(
    createToDo(
      name.value,
      description.value,
      dueDate.value,
      priorityChosen[0].defaultValue,
    ),
  );
  renderOneToDo(project.getTasks()[project.getTasks().length - 1]);
};

export { addProject, addToDo };
