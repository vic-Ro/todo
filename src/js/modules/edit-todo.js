import { parseISO } from 'date-fns';
import generateElement from './element-generator';
import { validateText, validatePriority, validateDate } from './validate';
import { generateDate } from './templates';
import exportObject from './local-storage';

const regEx = {
  name: /^[a-zA-Z0-9À-ÿ\s]{1,20}$/,
  description: /^[a-zA-Z0-9À-ÿ\s]{1,60}$/,
};

const generateNameForm = (name) => {
  const inputName = generateElement('input', 'edit-todo__name');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'name');
  inputName.setAttribute('placeholder', 'Insert Name');
  inputName.setAttribute('value', name.textContent);
  inputName.setAttribute('id', 'edit-name-form');
  return inputName;
};

const generateDescriptionForm = (description) => {
  const inputDescription = generateElement('input', 'edit-todo__description');
  inputDescription.setAttribute('type', 'text');
  inputDescription.setAttribute('name', 'description');
  inputDescription.setAttribute('placeholder', 'Insert description');
  inputDescription.setAttribute('value', description.textContent);
  inputDescription.setAttribute('id', 'edit-description-form');
  return inputDescription;
};

const generateDateForm = (date) => {
  const inputDate = generateElement('input', 'edit-todo__calendar');
  inputDate.setAttribute('type', 'date');
  inputDate.setAttribute('name', 'date');
  inputDate.setAttribute('value', date);
  inputDate.setAttribute('id', 'edit-date-form');
  return inputDate;
};

const generatePriorityForm = (priority) => {
  const groupPriority = generateElement('div', 'edit-todo__priority');
  const inputRadio1 = generateElement('input', 'form__radio');
  inputRadio1.setAttribute('type', 'radio');
  inputRadio1.setAttribute('name', 'edit-priority');
  inputRadio1.setAttribute('value', 'priority1');
  inputRadio1.setAttribute('id', 'edit-priority1');
  const labelRadio1 = generateElement(
    'label',
    'form__priority',
    'form__priority--low',
  );
  labelRadio1.setAttribute('for', 'edit-priority1');

  const inputRadio2 = generateElement('input', 'form__radio');
  inputRadio2.setAttribute('type', 'radio');
  inputRadio2.setAttribute('name', 'edit-priority');
  inputRadio2.setAttribute('value', 'priority2');
  inputRadio2.setAttribute('id', 'edit-priority2');
  const labelRadio2 = generateElement(
    'label',
    'form__priority',
    'form__priority--medium',
  );
  labelRadio2.setAttribute('for', 'edit-priority2');

  const inputRadio3 = generateElement('input', 'form__radio');
  inputRadio3.setAttribute('type', 'radio');
  inputRadio3.setAttribute('name', 'edit-priority');
  inputRadio3.setAttribute('value', 'priority3');
  inputRadio3.setAttribute('id', 'edit-priority3');
  const labelRadio3 = generateElement(
    'label',
    'form__priority',
    'form__priority--high',
  );
  labelRadio3.setAttribute('for', 'edit-priority3');
  switch (priority) {
    case 'priority1':
      inputRadio1.setAttribute('checked', true);
      break;
    case 'priority2':
      inputRadio2.setAttribute('checked', true);
      break;
    case 'priority3':
      inputRadio3.setAttribute('checked', true);
      break;
    default:
      break;
  }
  groupPriority.append(
    inputRadio1,
    labelRadio1,
    inputRadio2,
    labelRadio2,
    inputRadio3,
    labelRadio3,
  );
  return groupPriority;
};

const generateSaveButton = (todo, projectsArray) => {
  const saveButton = generateElement('button', 'button', 'edit-todo__save');
  saveButton.textContent = 'Save';
  saveButton.addEventListener('click', (e) => {
    e.preventDefault();
    const editNameForm = document.getElementById('edit-name-form');
    const editDescriptionForm = document.getElementById('edit-description-form');
    const editDateForm = document.getElementById('edit-date-form');
    const editPriorityInputs = [...document.getElementsByName('edit-priority')];
    const groupPriority = document.querySelector('.edit-todo__priority');
    const [priorityChosen] = [...document.getElementsByName('edit-priority')].filter(
      (input) => input.checked === true,
    );
    if (
      validateText(regEx.name, editNameForm) === true &&
      validateText(regEx.description, editDescriptionForm) === true &&
      validatePriority(editPriorityInputs) === true &&
      validateDate(editDateForm) === true
    ) {
      todo.updateTitle(editNameForm.value);
      todo.updateDescription(editDescriptionForm.value);
      todo.updateDueDate(editDateForm.value);
      todo.updatePriority(priorityChosen.value);
      localStorage.setItem('db', JSON.stringify(exportObject(projectsArray)));

      const title = generateElement('span', 'projects-list__name');
      title.textContent = todo.getTitle();
      const description = generateElement('span', 'projects-list__description');
      description.textContent = todo.getDescription();
      const dueDate = generateElement('span', 'projects-list__time');
      dueDate.textContent = generateDate(parseISO(todo.getDueDate()));
      const editButton = document.querySelector('.edit-button__active');
      const priority = saveButton.parentElement.firstChild;
      priority.classList.remove('priority1');
      priority.classList.remove('priority2');
      priority.classList.remove('priority3');

      saveButton.parentElement.replaceChild(title, editNameForm);
      saveButton.parentElement.replaceChild(description, editDescriptionForm);
      saveButton.parentElement.replaceChild(dueDate, editDateForm);
      priority.classList.add(todo.getPriority());
      groupPriority.remove();
      saveButton.remove();
      editButton.classList.remove('hidden');
      editButton.classList.remove('edit-button__active');
    }
  });
  return saveButton;
};

const editTodoListener = (projectsArray, project) => {
  const editButtons = document.querySelectorAll('.button--edit-todo');
  editButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const editProjectForm = document.getElementById('edit-project-form');
      if (editProjectForm) return;
      const saveButton = document.querySelector('.edit-todo__save');
      if (saveButton !== null) return;
      button.classList.add('hidden');
      button.classList.add('edit-button__active');
      const todoID = button.parentElement.dataset.id;
      const [todo] = project.getTasks().filter((task) => task.id === todoID);
      const name = button.parentElement.children[3];
      const date = button.parentElement.children[4];
      const description = button.parentElement.children[7];
      button.parentElement.replaceChild(generateNameForm(name), name);
      button.parentElement.replaceChild(generateDescriptionForm(description), description);
      button.parentElement.replaceChild(generateDateForm(todo.getDueDate()), date);
      button.parentElement.appendChild(generatePriorityForm(todo.getPriority()));
      button.parentElement.appendChild(generateSaveButton(todo, projectsArray));
    });
  });
};

export default editTodoListener;
