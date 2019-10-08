import $ from 'jquery';
import utilities from '../../helpers/utilities';

import './paintbrush.scss';

const colors = ['green', 'darkorchid', 'papayawhip', 'blanchedalmond', 'tomato', 'cornsilk'];

const printColorPicker = () => {
  let domString = '';
  for (let i = 0; i < colors.length; i += 1) {
    const color = colors[i];
    domString += `
    <div class="form-check form-check-inline">
    <input class="form-check-input color-choice" type="radio" name="inlineColorOptions" id="${color}Radio" value="${color}">
    <label class="form-check-label" for="${color}Radio">${color}</label>
    </div>`;
  }
  utilities.printToDom('color-picker', domString);
};

const paintPixel = (event) => {
  const pixel = $(event.target);
  const colorChoice = $('.color-choice:checked').val();
  pixel.css('backgroundColor', colorChoice);
};

const attachEvents = () => {
  $(document).on('click', 'td', paintPixel);
};

export default { printColorPicker, attachEvents };
