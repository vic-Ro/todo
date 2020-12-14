import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  parseISO,
} from 'date-fns';
import generateElement from './element-generator';

const projectTemplate = (project) => {
  const box = generateElement('li', 'menu__item');
  box.setAttribute('data-id', `${project.id}`);
  const title = generateElement('span', 'menu__title');
  title.textContent = `${project.getProjectName()}`;
  const deleteButton = generateElement('i', 'fas', 'fa-trash');
  box.append(title, deleteButton);
  return box;
};

const generateDate = (dueDate) => {
  const now = new Date();
  const diffMinutes = differenceInMinutes(dueDate, now);
  const diffDays = differenceInDays(dueDate, now);
  const diffHours = differenceInHours(dueDate, now);
  if (diffDays <= 0) return `${diffHours} hours and ${diffMinutes - 60 * diffHours} minutes left`;
  if (diffDays === 1) return `${diffDays} day and ${diffHours - 24} hours left`;
  return `${diffDays} days and ${diffHours - 24 * diffDays} hours left`;
};

const toDoTemplate = (task) => {
  const box = generateElement('li', 'projects-list__item');
  box.setAttribute('data-id', task.id);
  const priority = generateElement(
    'div',
    'projects-list__priority',
    `${task.getPriority()}`,
  );
  const title = generateElement('span', 'projects-list__name');
  title.textContent = `${task.getTitle()}`;
  const time = generateElement('span', 'projects-list__time');
  time.textContent = generateDate(parseISO(task.getDueDate()));
  const deleteButton = generateElement('i', 'fas', 'fa-trash');
  const expandButton = generateElement('span', 'projects-list__expand');
  expandButton.textContent = String.fromCharCode(10094);
  const description = generateElement('span', 'projects-list__description', 'hidden');
  description.textContent = `${task.getDescription()}`;
  const checkbox = generateElement('div', 'projects-list__checkbox');
  const editButton = generateElement('button', 'button', 'button--edit-todo', 'hidden');
  editButton.textContent = 'Edit';
  if (task.getIsDone() === true) {
    box.classList.add('projects-list__item--checked');
    checkbox.classList.add('projects-list__checkbox--checked');
    title.classList.add('projects-list__name--checked');
    time.classList.add('projects-list__time--checked');
    description.classList.add('projects-list__description--checked');
    priority.classList.add('prioritychecked');
  }
  box.append(priority, checkbox, expandButton, title, time, deleteButton, editButton, description);
  return box;
};

export { projectTemplate, toDoTemplate, generateDate };
