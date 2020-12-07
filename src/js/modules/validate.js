import generateElement from './element-generator';

// TODO Refactorizar

const validateText = (input, form, charLimit, field) => {
  if (input === '') {
    if (form.lastChild.classList.contains('error-msg')) {
      const child = form.lastChild;
      child.textContent = `${field} field can't be empty.`;
      return false;
    }
    const errorMsg = generateElement('span', 'error-msg');
    errorMsg.textContent = `${field} field can't be empty.`;
    form.appendChild(errorMsg);
    return false;
  }
  if (input.length > charLimit) {
    if (form.lastChild.classList.contains('error-msg')) {
      const child = form.lastChild;
      child.textContent = `${field} field must be ${charLimit} or less characters.`;
      return false;
    }
    const errorMsg = generateElement('span', 'error-msg');
    errorMsg.textContent = `${field} field must be ${charLimit} or less characters.`;
    form.appendChild(errorMsg);
    return false;
  }
  if (form.lastChild.classList.contains('error-msg')) {
    form.lastChild.remove();
  }
  return true;
};

const validateDate = (input, form) => {};

export default validateText;
