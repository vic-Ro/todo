import exportObject from './local-storage';

const todoCheckBoxListener = (projectsArray, project) => {
  const checkbox = document.querySelectorAll('.projects-list__checkbox');
  checkbox.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.toggle('projects-list__checkbox--checked');
      element.previousSibling.classList.toggle('prioritychecked');
      element.nextElementSibling.classList.toggle('projects-list__name--checked');
      element.nextElementSibling.nextElementSibling.classList.toggle('projects-list__time--checked');
      element.parentElement.classList.toggle('projects-list__item--checked');

      const [todo] = project
        .getTasks()
        .filter((task) => task.id === element.parentElement.dataset.id);
      todo.updateIsDone();
      localStorage.setItem('db', JSON.stringify(exportObject(projectsArray)));
    });
  });
};

export default todoCheckBoxListener;
