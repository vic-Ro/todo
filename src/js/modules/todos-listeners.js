import exportObject from './local-storage';

const todoCheckBoxListener = (projectsArray, project) => {
  const checkbox = document.querySelectorAll('.projects-list__checkbox');
  checkbox.forEach((element) => {
    element.addEventListener('click', () => {
      const editForm = document.getElementById('edit-name-form');
      if (editForm) return;
      element.classList.toggle('projects-list__checkbox--checked');
      element.previousSibling.classList.toggle('prioritychecked');
      element.nextElementSibling.nextElementSibling.classList.toggle('projects-list__name--checked');
      element.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('projects-list__time--checked');
      element.parentElement.lastChild.classList.toggle('projects-list__description--checked');

      const [todo] = project
        .getTasks()
        .filter((task) => task.id === element.parentElement.dataset.id);
      todo.updateIsDone();
      localStorage.setItem('db', JSON.stringify(exportObject(projectsArray)));
    });
  });
};

const expandListener = () => {
  const expandButtons = document.querySelectorAll('.projects-list__expand');
  expandButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const expanded = document.querySelector('.projects-list__expand--active');
      const editForm = document.getElementById('edit-name-form');
      if (editForm) return;
      if (expanded === null) {
        button.classList.toggle('projects-list__expand--active');
        button.parentElement.lastChild.classList.toggle('hidden');
        button.parentElement.children[6].classList.toggle('hidden');
      } else if (expanded.parentElement.dataset.id === button.parentElement.dataset.id) {
        button.classList.toggle('projects-list__expand--active');
        button.parentElement.lastChild.classList.toggle('hidden');
        button.parentElement.children[6].classList.toggle('hidden');
      } else {
        expanded.classList.toggle('projects-list__expand--active');
        expanded.parentElement.lastChild.classList.toggle('hidden');
        expanded.parentElement.children[6].classList.toggle('hidden');
        button.classList.toggle('projects-list__expand--active');
        button.parentElement.lastChild.classList.toggle('hidden');
        button.parentElement.children[6].classList.toggle('hidden');
      }
    });
  });
};

export { todoCheckBoxListener, expandListener };
