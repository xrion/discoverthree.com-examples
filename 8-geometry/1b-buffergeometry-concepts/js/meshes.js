import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  const sphere = initSphere();

  return { sphere };

}

function initSphere() {

  const geometry = new SphereBufferGeometry( 1, 8, 8 );

  geometry.translate( 2, 0, 0 );

  const material = new MeshBasicMaterial( { color: 0x800080, wireframe: true } );

  const sphere = new Mesh( geometry, material );

  console.log( '...and here\'s the sphere geometry you just created: ', geometry );

  return sphere;

}