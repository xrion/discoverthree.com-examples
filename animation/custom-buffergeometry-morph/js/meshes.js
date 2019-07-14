import {
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  const leftQuad = new Mesh( geometries.nonIndexed, materials.morph );
  leftQuad.position.x -= 1.5;

  const rightQuad = new Mesh( geometries.indexed, materials.morph.clone() );
  rightQuad.position.x += 1.5;

  return {

    leftQuad,
    rightQuad,

  };

}
