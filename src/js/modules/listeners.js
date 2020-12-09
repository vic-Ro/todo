import { validateText, validatePriority, validateDate } from './validate';
import { addProject, addToDo } from './add-elements';
import { projectTemplate } from './templates';

const regEx = {
  name: /^[a-zA-Z0-9À-ÿ\s]{1,20}$/,
  description: /^[a-zA-Z0-9À-ÿ\s]{1,60}$/,
};

//* Listeners

const projectsFormListener = (projectsArray) => {
  const form = document.getElementById('project-form');
  const name = document.querySelector('.project-form__name');
  const description = document.querySelector('.project-form__description');
  const projectSaveButton = document.querySelector(
    '.button__project-form.button--save',
  );
  const projectCancelButton = document.querySelector(
    '.button__project-form.button--cancel',
  );
  projectSaveButton.addEventListener('click', (e) => {
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

const todosFormListener = (project) => {
  const form = document.getElementById('todos-form');
  const name = document.querySelector('.form__task-name');
  const description = document.querySelector('.form__task-description');
  const dueDate = document.querySelector('.form__calendar');

  const todoSaveButton = document.querySelector(
    'div.group__todo-buttons .button--save',
  );
  const todoCancelButton = document.querySelector(
    'div.group__todo-buttons .button--cancel',
  );
  todoSaveButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      validateText(regEx.name, name) === true &&
      validateText(regEx.description, description) === true &&
      validatePriority() === true &&
      validateDate(dueDate) === true
    ) {
      addToDo(project, name, description, dueDate);
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

// export default addToDoButtonListener;

export {
  todosFormListener,
  projectsFormListener,
  addToDoButtonListener,
  addProjectButtonListener,
};
