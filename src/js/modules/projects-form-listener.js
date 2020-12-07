import addProject from './add-project';
import validateText from './validate';

const projectFormListener = (projectsArray) => {
  const form = document.getElementById('project-form');
  form.addEventListener('click', (e) => {
    if (e.target.classList.contains('button--cancel')) {
      e.preventDefault();
      form.classList.add('hidden');
      if (form.lastChild.classList.contains('error-msg')) {
        form.lastChild.remove();
      }
    }
    if (e.target.classList.contains('button--save')) {
      if (
        // eslint-disable-next-line operator-linebreak
        validateText(form.firstChild.value, form, 20, 'Name') &&
        validateText(form.children[1].value, form, 40, 'Description')
      ) {
        e.preventDefault();
        addProject(projectsArray, form);
        form.reset();
        form.classList.toggle('hidden');
      }
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

export { projectFormListener, addProjectButtonListener };
