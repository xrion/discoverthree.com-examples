import {
  CylinderBufferGeometry,
} from './vendor/three/three.module.js';

export default function createGeometries() {

  return {

    truncatedCone: new CylinderBufferGeometry( 1, 0.5, 1, 64, 1 ),

  };

}
