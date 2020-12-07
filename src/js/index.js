import '../sass/main.scss';
import addToDo from './modules/add-todos';
import createToDos from './modules/todos';
import { renderToDos, renderOneToDo } from './modules/render-todos';
import createProject from './modules/projects';
import { renderAllProjects } from './modules/render-projects';
import {
  projectFormListener,
  addProjectButtonListener,
} from './modules/projects-form-listener';
import addToDoButtonListener from './modules/todos-form-listener';
import validateText from './modules/validate';

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

const form = document.getElementById('todos-form');
form.addEventListener('click', (e) => {
  if (e.target.classList.contains('button--cancel')) {
    e.preventDefault();
    form.classList.add('hidden');
    if (form.lastChild.classList.contains('error-msg')) {
      form.lastChild.remove();
    }
  }
  if (e.target.classList.contains('button--save')) {
    e.preventDefault();
    if (
      // eslint-disable-next-line operator-linebreak
      validateText(form.firstChild.value, form, 20, 'Name') &&
      validateText(form.children[1].value, form, 40, 'Description')
    ) {
      addToDo(projects[0]);
      form.reset();
      form.classList.toggle('hidden');
    }
  }
});
//* OK
projectFormListener(projects);
addProjectButtonListener();
addToDoButtonListener();
