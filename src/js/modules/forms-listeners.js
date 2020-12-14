import { validateText, validatePriority, validateDate } from './validate';
import { addProject, addToDo } from './add-elements';
import { clearToDos } from './clear-dom';
import { renderToDos, renderListTitle } from './render';

const regEx = {
  name: /^[a-zA-Z0-9À-ÿ\s]{1,20}$/,
  description: /^[a-zA-Z0-9À-ÿ\s]{1,60}$/,
};

const projectsFormListener = (projectsArray) => {
  const form = document.getElementById('project-form');
  const name = document.querySelector('.project-form__name');
  const description = document.querySelector('.project-form__description');
  const projectCancelButton = document.querySelector(
    '.button__project-form.button--cancel',
  );
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (
      validateText(regEx.name, name) === true &&
      validateText(regEx.description, description) === true
    ) {
      addProject(projectsArray, name.value, description.value);
      form.reset();
      form.classList.toggle('hidden');
      if (form.lastChild.classList.contains('error-msg')) {
        form.lastChild.classList.add('hidden');
      }
    } else {
      form.lastChild.classList.remove('hidden');
    }
  });
  projectCancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.add('hidden');
    form.reset();
    if (form.lastChild.classList.contains('error-msg')) {
      form.lastChild.classList.add('hidden');
    }
  });
};

const todosFormListener = (projectsArray) => {
  const form = document.getElementById('todos-form');
  const name = document.querySelector('.form__task-name');
  const description = document.querySelector('.form__task-description');
  const dueDate = document.querySelector('.form__calendar');
  const priorityInputs = [...document.getElementsByName('priority')];
  const todoCancelButton = document.querySelector(
    'div.group__todo-buttons .button--cancel',
  );
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (
      validateText(regEx.name, name) === true &&
      validateText(regEx.description, description) === true &&
      validatePriority(priorityInputs) === true &&
      validateDate(dueDate) === true
    ) {
      addToDo(projectsArray, name, description, dueDate);
      form.reset();
      if (form.lastChild.classList.contains('error-msg')) {
        form.lastChild.classList.add('hidden');
      }
    } else {
      form.lastChild.classList.remove('hidden');
    }
  });
  todoCancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.add('hidden');
    form.reset();
    if (form.lastChild.classList.contains('error-msg')) {
      form.lastChild.classList.add('hidden');
    }
  });
};

const addProjectsListener = (projectsArray) => {
  const projectList = document.getElementById('menu');
  projectList.addEventListener('click', (e) => {
    const editProject = document.getElementById('edit-project-form');
    if (editProject !== null) return;
    const projects = [...projectList.childNodes];
    if (e.target.classList.contains('menu__item')) {
      projects.forEach((project) => {
        project.classList.replace('menu__item--active', 'menu__item');
      });
      e.target.classList.replace('menu__item', 'menu__item--active');
      const [activeProject] = projectsArray.filter(
        (project) => project.id === e.target.dataset.id,
      );
      clearToDos();
      renderToDos(projectsArray, activeProject);
      renderListTitle(activeProject);
    }
  });
};

const addProjectButtonListener = () => {
  const addProjectButton = document.getElementById('addproject-button');
  addProjectButton.addEventListener('click', () => {
    const form = document.getElementById('project-form');
    form.classList.toggle('hidden');
  });
};

const addToDoButtonListener = () => {
  const addToDoButton = document.getElementById('addtask-button');
  addToDoButton.addEventListener('click', () => {
    const form = document.getElementById('todos-form');
    form.classList.toggle('hidden');
  });
};

export {
  todosFormListener,
  projectsFormListener,
  addToDoButtonListener,
  addProjectButtonListener,
  addProjectsListener,
};
