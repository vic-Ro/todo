import generateElement from './element-generator';

const projectTemplate = (project) => {
  const box = generateElement('li', 'menu__item');
  const title = generateElement('span', 'menu__title');
  title.textContent = `${project.getProjectName()}`;
  const deleteButton = generateElement('i', 'fas', 'fa-trash');
  box.append(title, deleteButton);
  return box;
};

export default projectTemplate;
