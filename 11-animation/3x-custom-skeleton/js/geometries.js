import {
  CylinderBufferGeometry,
} from './vendor/three/three.module.js';

function createdSkinningGeometry() {

  return new CylinderBufferGeometry( 1, 1, 8, 8, 16 );

}

export default function createGeometries() {

  return {

    cylinder: createdSkinningGeometry(),

  };

}
