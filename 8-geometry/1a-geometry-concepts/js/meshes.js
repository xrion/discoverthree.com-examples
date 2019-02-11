import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  SphereGeometry,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  const cube = initCube();
  const sphere = initSphere();

  return { cube, sphere };

}

function initCube() {

  const geometry = new BoxGeometry( 2, 2, 2 );

  const material = new MeshBasicMaterial( { color: 0x800080, wireframe: true } );

  const cube = new Mesh( geometry, material );
  cube.position.x = -2;


  console.log( 'Here\'s the cube geometry you just created: ', geometry );

  return cube;

}

function initSphere() {

  const geometry = new sSphereGeometry( 1, 8, 8 );

  // this time we'll translate the geometry instead of the mesh
  // the visible effect will be the same, but there
  // are important differences in doing it this way,
  // in particular, it's MUCH less efficient
  geometry.translate( 2, 0, 0 );

  const material = new MeshBasicMaterial( { color: 0x800080, wireframe: true } );

  const sphere = new Mesh( geometry, material );

  console.log( '...and here\'s the sphere geometry you just created: ', geometry );

  return sphere;

}
