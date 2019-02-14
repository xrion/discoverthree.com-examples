import {
  BoxBufferGeometry,
} from './vendor/three/three.module.js';

export default function createGeometries() {

  return {

    box: new BoxBufferGeometry( 0.5, 0.5, 0.5 ),

  };

}
