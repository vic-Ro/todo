const addToDoButtonListener = () => {
  const addToDoButton = document.getElementById('addtask-button');
  addToDoButton.addEventListener('click', () => {
    const form = document.getElementById('todos-form');
    form.classList.toggle('hidden');
  });
};

export default addToDoButtonListener;
