import {
  GridHelper,
} from './vendor/three/three.module.js';

function createGridHelper() {

  // add a gridhelper to help visualize the position.
  // In a real app you would probably need to do some calculations
  // to make sure that the size of the grid's squares have meaning
  // here, we've just made it big enough to fill the whole GUI

  return new GridHelper( 300, 10, 10 );

}

export default function createHelpers() {

  return {

    grid: createGridHelper(),

  };

}
