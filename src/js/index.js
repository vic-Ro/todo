import '../sass/main.scss';
import {
  todosFormListener,
  projectsFormListener,
  addToDoButtonListener,
  addProjectButtonListener,
  addProjectsListener,
} from './modules/listeners';
import createProject from './modules/projects';
import createToDo from './modules/todos';
import { renderProjects } from './modules/render';

const projects = [];

const data = JSON.parse(localStorage.getItem('db'));
if (data === null || data.length === 0) {
  console.log('NO HAY DATOS');
} else {
  console.log('HAY DATOS');
}
projects.push(createProject('Default', 'Este es el proyecto default'));
projects.push(createProject('Default 2', 'Este es el proyecto default 2'));
projects.push(createProject('Default 3', 'Este es el proyecto default 3'));
projects[0].addTasks(
  createToDo('Todo 1', 'Descripcion 1', '2021-01-01', 'priority1'),
);
projects[0].addTasks(
  createToDo('Todo 2', 'Descripcion 2', '2021-01-01', 'priority1'),
);
projects[0].addTasks(
  createToDo('Todo 3', 'Descripcion 3', '2021-01-01', 'priority1'),
);
projects[1].addTasks(
  createToDo('Todo 4', 'Descripcion 4', '2021-01-01', 'priority1'),
);
projects[1].addTasks(
  createToDo('Todo 5', 'Descripcion 5', '2021-01-01', 'priority1'),
);
projects[1].addTasks(
  createToDo('Todo 6', 'Descripcion 6', '2021-01-01', 'priority1'),
);
projects[2].addTasks(
  createToDo('Todo 7', 'Descripcion 7', '2021-01-01', 'priority1'),
);
projects[2].addTasks(
  createToDo('Todo 8', 'Descripcion 8', '2021-01-01', 'priority1'),
);
projects[2].addTasks(
  createToDo('Todo 9', 'Descripcion 9', '2021-01-01', 'priority1'),
);
addProjectButtonListener(); // OK
addToDoButtonListener(); // OK
addProjectsListener(projects); // OK
projectsFormListener(projects); // OK
todosFormListener(projects); // OK
renderProjects(projects); // OK
