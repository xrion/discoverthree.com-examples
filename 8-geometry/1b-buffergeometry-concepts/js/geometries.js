import {
  TorusBufferGeometry,
} from './vendor/three/three.module.js';

export default function createGeometries() {

  return {

    torus: new TorusBufferGeometry( 6, 0.75, 32, 32, Math.PI / 4 ),

  };

}
