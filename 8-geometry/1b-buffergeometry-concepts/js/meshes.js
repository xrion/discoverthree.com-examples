import {
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  const shape = new Mesh( geometries.torus, materials.wireframe );

  return {

    shape,

  };

}
