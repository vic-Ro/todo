import { isPast, parseISO } from 'date-fns';

const validateText = (rule, input) => {
  if (rule.test(input.value)) return true;
  return false;
};

const validatePriority = (priorityInputs) => {
  if (
    priorityInputs.filter((input) => {
      if (input.checked) return true;
      return false;
    }).length > 0
  ) {
    return true;
  }
  return false;
};

const validateDate = (dueDate) => {
  if (dueDate.value === '') return false;
  if (isPast(parseISO(dueDate.value)) === true) return false;
  return true;
};

export { validateText, validatePriority, validateDate };
