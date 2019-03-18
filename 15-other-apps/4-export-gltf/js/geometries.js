import {
  SphereBufferGeometry,
  TorusKnotBufferGeometry,
} from './vendor/three/three.module.js';

export default function createGeometries() {

  return {

    sphere: new SphereBufferGeometry( 1.875, 32, 32 ),
    torusKnot: new TorusKnotBufferGeometry( 3, 0.375, 64, 32, 1, 1 ),

  };

}
