import {
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geomtries, materials ) {

  const box = new Mesh( geomtries.box, materials.standard );
  box.position.x += 1.5;

  const sphere = new Mesh( geomtries.sphere, materials.standard );
  sphere.position.x -= 1.5;

  return {

    box,
    sphere

  };

}
