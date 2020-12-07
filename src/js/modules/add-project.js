import createProject from './projects';
import { renderOneProject } from './render-projects';

const addProject = (projectsArray, projectsForm) => {
  projectsArray.push(
    createProject(
      projectsForm.firstChild.value,
      projectsForm.children[1].value,
    ),
  );
  renderOneProject(projectsArray[projectsArray.length - 1]);
};

export default addProject;
