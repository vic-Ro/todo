const clearProjects = () => {
  const list = document.getElementById('menu');
  list.innerHTML = '';
};

const clearToDos = () => {
  const list = document.getElementById('projects-list');
  list.innerHTML = '';
};

export { clearToDos, clearProjects };
