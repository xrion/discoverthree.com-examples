import {
  SphereBufferGeometry,
  Mesh,
  MeshBasicMaterial,
} from './vendor/three/three.module.js';

function createSphere() {

  const geometry = new SphereBufferGeometry( 1, 8, 8 );

  geometry.translate( 2, 0, 0 );

  const material = new MeshBasicMaterial( { color: 0x800080, wireframe: true } );

  const sphere = new Mesh( geometry, material );

  console.log( '...and here\'s the sphere geometry you just created: ', geometry );

  return sphere;

}

export default function createMeshes() {

  return {
    sphere: createSphere(),
  };

}
