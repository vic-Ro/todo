import '../sass/main.scss';
import createToDos from './modules/todos';
import renderToDos from './modules/render-todos';
import createProject from './modules/projects';
import { renderAllProjects } from './modules/render-projects';
import addProject from './modules/add-project';

const projects = [];
projects.push(createProject('Proyecto 1', 'Este es el proyecto 1'));
projects.push(createProject('Proyecto 2', 'Este es el proyecto 2'));
projects.push(createProject('Proyecto 3', 'Este es el proyecto 3'));
projects.push(createProject('Proyecto 4', 'Este es el proyecto 4'));
projects[0].addTasks(
  createToDos('Todo 1', 'Este es el todo 1', '24h', 'priority1'),
);
projects[0].addTasks(
  createToDos('Todo 2', 'Este es el todo 2', '24h', 'priority1'),
);
projects[0].addTasks(
  createToDos('Todo 3', 'Este es el todo 3', '24h', 'priority2'),
);
projects[0].addTasks(
  createToDos('Todo 4', 'Este es el todo 4', '24h', 'priority3'),
);
projects[0].removeTask(1);
renderToDos(projects[0]);
renderAllProjects(projects);

const form = document.getElementById('project-form');
form.addEventListener('click', (e) => {
  if (e.target.classList.contains('button--cancel')) {
    form.classList.add('hidden');
  }
  if (e.target.classList.contains('button--save')) {
    addProject(projects, form);
  }
});
