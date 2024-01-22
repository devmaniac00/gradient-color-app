export const isValidColor = (colorName) => {
  const colorElement = document.createElement('div');
  colorElement.style.color = 'transparent';

  document.body.appendChild(colorElement);
  colorElement.style.color = colorName;

  const isColorValid = colorElement.style.color !== 'transparent';

  document.body.removeChild(colorElement);

  return isColorValid;
};
