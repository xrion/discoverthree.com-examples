import {
  BoxBufferGeometry,
  TorusKnotBufferGeometry,
} from './vendor/three/three.module.js';

export default function createGeometries() {

  return {

    box: new BoxBufferGeometry( 2, 2, 2 ),
    torusKnot: new TorusKnotBufferGeometry( 0.75, 0.2, 128, 32 ),

  };

}
