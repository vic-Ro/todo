import '../sass/main.scss';
import {
  todosFormListener,
  projectsFormListener,
  addToDoButtonListener,
  addProjectButtonListener,
  addProjectsListener,
} from './modules/forms-listeners';
import createProject from './modules/projects';
import createToDo from './modules/todos';
import { renderProjects } from './modules/render';
import editProjectListener from './modules/edit-project';

const projects = [];

const data = JSON.parse(localStorage.getItem('db'));
if (data === null || data.length === 0) {
  projects.push(createProject('Your first project', 'Add projects and todos!'));
  projects[0].addTasks(
    createToDo(
      'Your first todo',
      'Add todos and choose its due date and its priority!',
      '2022-01-01',
      'priority3',
    ),
  );
} else {
  data.forEach((project, index) => {
    projects.push(createProject(project.name, project.description));
    project.tasks.forEach((task) => {
      projects[index].addTasks(
        createToDo(task.title, task.description, task.dueDate, task.priority, task.isDone),
      );
    });
  });
}

addProjectButtonListener(); // OK
addToDoButtonListener(); // OK
addProjectsListener(projects); // OK
projectsFormListener(projects); // OK
todosFormListener(projects); // OK
renderProjects(projects); // OK
editProjectListener(projects);
