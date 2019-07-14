import {
  CylinderBufferGeometry,
} from './vendor/three/three.module.js';

export default function createGeometries() {

  const truncatedCone = new CylinderBufferGeometry( 1, 0, 100, 64, 1 );
  truncatedCone.translate( 0, -50, 0 );

  return {

    truncatedCone,

  };

}
