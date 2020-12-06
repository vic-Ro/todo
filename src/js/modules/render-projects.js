import projectTemplate from './projects-template';

const renderAllProjects = (projectsArray) => {
  const projectsList = document.getElementById('menu');
  const fragment = document.createDocumentFragment();
  projectsArray.forEach((project) => {
    fragment.appendChild(projectTemplate(project));
  });
  projectsList.lastChild.before(fragment);
};

const renderOneProject = (project) => {
  const projectsList = document.getElementById('menu');
  projectsList.lastChild.before(projectTemplate(project));
};

export { renderAllProjects, renderOneProject };
