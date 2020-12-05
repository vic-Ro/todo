import toDoTemplate from './task-dom';

const renderProject = (project) => {
  const projectsList = document.getElementById('projects-list');
  const fragment = document.createDocumentFragment();
  project.getTasks().forEach((task) => {
    fragment.appendChild(toDoTemplate(task));
  });
  projectsList.appendChild(fragment);
};

export default renderProject;
