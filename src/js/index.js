import '../sass/main.scss';
import {
  todosFormListener,
  projectsFormListener,
  addToDoButtonListener,
  addProjectButtonListener,
} from './modules/listeners';
import createProject from './modules/projects';
import { renderAllProjects } from './modules/render';

const projects = [];
projects.push(createProject('Default', 'Este es el proyecto default'));
renderAllProjects(projects);
projectsFormListener(projects);
todosFormListener(projects[0]);
addToDoButtonListener();
addProjectButtonListener();
