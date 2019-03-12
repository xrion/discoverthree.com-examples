import {
  CylinderBufferGeometry,
} from './vendor/three/three.module.js';

export default function createGeometries() {

  return {

    truncatedCone: new CylinderBufferGeometry( 18, 18, 1, 64, 1 ),

  };

}
