import { renderOneToDo } from './render-todos';
import createToDo from './todos';

const addToDo = (project) => {
  const form = document.getElementById('todos-form');
  const priorityChosen = [...document.getElementsByName('priority')].filter(
    (input) => input.checked === true,
  );
  project.addTasks(
    createToDo(
      form.firstChild.value,
      form.children[1].value,
      form.children[8].value,
      priorityChosen[0].defaultValue,
    ),
  );
  renderOneToDo(project.getTasks()[project.getTasks().length - 1]);
};

export default addToDo;
