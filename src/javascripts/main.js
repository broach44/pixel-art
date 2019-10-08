import grid from './components/grid/grid';
import paintbrush from './components/paintbrush/paintbrush';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  grid.makeGrid();
  paintbrush.printColorPicker();
};

init();
