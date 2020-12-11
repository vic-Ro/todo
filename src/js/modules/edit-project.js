import generateElement from './element-generator';
import { clearToDos, clearProjects } from './clear-dom';
import { renderProjects, renderToDos, renderListTitle } from './render';
import exportObject from './local-storage';

const generateTitle = (project) => {
  const container = generateElement('div', 'project-info');
  const title = generateElement('h1', 'main__title');
  title.textContent = project.getProjectName();
  const subtitle = generateElement('h2', 'main__subtitle');
  subtitle.textContent = project.getDescription();
  container.append(title, subtitle);
  return container;
};

const saveListener = (form, button, projectsArray) => {
  const projectID = document.querySelector('.menu__item--active').dataset.id;
  const container = document.querySelector('.project-info');
  const editButton = document.querySelector('.button.button--edit');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const [activeProject] = projectsArray.filter((project) => project.id === projectID);
    activeProject.updateName(form.name.value);
    activeProject.updateDescription(form.description.value);
    container.replaceWith(generateTitle(activeProject));
    localStorage.setItem('db', JSON.stringify(exportObject(projectsArray)));
    editButton.classList.remove('hidden');
    const isSelected = document.querySelector('.menu__item--active');
    clearProjects();
    renderProjects(projectsArray);
    if (isSelected !== null) {
      const [newSelected] = [...document.querySelectorAll('.menu__item')].filter(
        (element) => element.dataset.id === isSelected.dataset.id,
      );
      if (newSelected !== undefined) newSelected.click();
    }
  });
};

const cancelListener = (form, button, projectsArray) => {
  const projectID = document.querySelector('.menu__item--active').dataset.id;
  const container = document.querySelector('.project-info');
  const editButton = document.querySelector('.button.button--edit');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const [activeProject] = projectsArray.filter((project) => project.id === projectID);
    container.replaceWith(generateTitle(activeProject));
    editButton.classList.remove('hidden');
  });
};

const generateForm = (title, subtitle, projectsArray) => {
  const form = generateElement('form', 'edit-project');
  form.setAttribute('id', 'edit-project-form');
  const inputTitle = generateElement('input', 'project-form__name');
  inputTitle.setAttribute('value', title.textContent);
  inputTitle.setAttribute('name', 'name');
  const inputSubtitle = generateElement('input', 'project-form__description');
  inputSubtitle.setAttribute('value', subtitle.textContent);
  inputSubtitle.setAttribute('name', 'description');
  const groupButtons = generateElement('div', 'group__project-buttons');
  const saveButton = generateElement(
    'button',
    'button',
    'button--save',
    'button__project-form',
  );
  saveButton.textContent = 'Save';
  saveListener(form, saveButton, projectsArray);
  const cancelButton = generateElement(
    'button',
    'button',
    'button--cancel',
    'button__project-form',
  );
  cancelListener(form, cancelButton, projectsArray);
  cancelButton.textContent = 'Cancel';
  groupButtons.append(saveButton, cancelButton);
  form.append(inputTitle, inputSubtitle, groupButtons);
  return form;
};

const editProjectListener = (projectsArray) => {
  const editButton = document.querySelector('.button.button--edit');
  editButton.addEventListener('click', () => {
    const title = document.querySelector('.main__title');
    const subtitle = document.querySelector('.main__subtitle');
    editButton.classList.add('hidden');
    subtitle.remove();
    title.replaceWith(generateForm(title, subtitle, projectsArray));
  });
};

export default editProjectListener;
