import {
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  const box = new Mesh( geometries.box, materials.wireframe );
  box.position.x = 2;

  const sphere = new Mesh( geometries.sphere, materials.wireframe );
  sphere.position.x = -2;

  return {

    box,
    sphere,

  };

}
