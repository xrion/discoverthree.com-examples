import {
  PlaneBufferGeometry,
} from './vendor/three/three.module.js';

export default function createGeometries() {

  return {

    // create a plane geometry. The vertices of this plane will
    // be at -1 and 1 on the X axis and Y axis, meaning that
    // if we don't transform them by any matrices then the
    // plane will take up the full screen
    plane: new PlaneBufferGeometry( 2, 2 ),

  };

}
