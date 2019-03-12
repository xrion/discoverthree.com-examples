import {
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  const moon = new Mesh( geometries.circle, materials.moon );

  moon.position.set( 0, 0, -10 );

  moon.renderOrder = 1;

  return { moon };

}
