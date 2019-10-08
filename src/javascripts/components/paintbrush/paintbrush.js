import utilities from '../../helpers/utilities';

const colors = ['Green', 'Dark Orchid', 'Papaya Whip', 'Blanched Almond', 'Tomato', 'Cornsilk'];

const printColorPicker = () => {
  let domString = '';
  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    domString += `
    <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineColorOptions" id="${color}Radio" value="${color}">
    <label class="form-check-label" for="${color}Radio">${color}</label>
    </div>`;
  }
  utilities.printToDom('color-picker', domString);
};

export default { printColorPicker };
