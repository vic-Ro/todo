import generateElement from './element-generator';

const projectTemplate = (project) => {
  const box = generateElement('li', 'menu__item');
  box.textContent = `${project.getProjectName()}`;
  return box;
};

export default projectTemplate;
