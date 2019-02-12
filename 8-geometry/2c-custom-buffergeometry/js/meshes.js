import {
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  const leftQuad = new Mesh( geometries.indexed, materials.basic );
  leftQuad.position.x -= 1.5;

  const rightQuad = new Mesh( geometries.nonIndexed, materials.basic );
  rightQuad.position.x += 1.5;

  return { leftQuad, rightQuad };

}
