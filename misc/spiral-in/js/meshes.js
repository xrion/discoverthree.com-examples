import {
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  const box = new Mesh( geometries.box, materials.standard );

  return { box };

}
