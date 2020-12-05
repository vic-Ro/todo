import '../sass/main.scss';
import createProject from './modules/projects';
import createToDos from './modules/tasks';
import renderProject from './modules/render-project';

const p1 = createProject('Proyecto 1', 'Este es el proyecto 1');
const tarea1 = p1.addTasks(
  createToDos('Todo 1', 'Este es el todo 1', '24h', '3'),
);
const tarea2 = p1.addTasks(
  createToDos('Todo 2', 'Este es el todo 2', '24h', '1'),
);
const tarea3 = p1.addTasks(
  createToDos('Todo 3', 'Este es el todo 3', '24h', '2'),
);
const tarea4 = p1.addTasks(
  createToDos('Todo 4', 'Este es el todo 4', '24h', '3'),
);

renderProject(p1);
// UL.appendChild(toDoTemplate());
