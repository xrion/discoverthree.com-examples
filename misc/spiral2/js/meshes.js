import {
  Mesh,
} from './vendor/three/three.module.js';

function createSpiral( geometries, materials ) {

  const spiral = new Mesh( geometries.instancedSpiral, materials.spiral );

  spiral.scale.multiplyScalar( 0.6 );

  return spiral;

}

export default function createMeshes( geometries, materials ) {

  return {

    spiral: createSpiral( geometries, materials ),

  };

}
