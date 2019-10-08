import paintbrush from './components/paintbrush/paintbrush';
import grid from './components/grid/grid';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  grid.makeGrid();
  paintbrush.printColorPicker();
  paintbrush.attachEvents();
};

init();
