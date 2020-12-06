const generateElement = (element, ...styles) => {
  const elementTemplate = document.createElement(`${element}`);
  [...styles].forEach((cssStyle) => {
    elementTemplate.classList.add(cssStyle);
  });
  return elementTemplate;
};

export default generateElement;
