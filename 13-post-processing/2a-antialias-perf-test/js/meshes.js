import {
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  const box = new Mesh( geometries.box, materials.standard );
  box.position.y = 1;

  return {

    box,

  };

}
