function createPlinth() {

  const geometry = new CylinderBufferGeometry( 18, 18, 1, 64, 1 );

  const material = new MeshStandardMaterial( {
    metalness: 0.1,
    roughness: 0.8,
  } );

  const plinth = new Mesh( geometry, material );

  return plinth;

}

function createShapes() {

  const torusKnotGeo = new TorusKnotBufferGeometry( 3, 0.375, 64, 32, 1, 1 );
  const torusKnotMat = new MeshStandardMaterial( {
    color: 0x000000,
  } );

  const torusKnot = new Mesh( torusKnotGeo, torusKnotMat );
  torusKnot.position.set( 0, 6, 0 );

  const sphereGeo = new SphereBufferGeometry( 1.875, 32, 32 );
  const sphereMat = new MeshStandardMaterial();

  const sphere = new Mesh( sphereGeo, sphereMat );
  sphere.position.set( 1.125, 0, 0 );

  torusKnot.add( sphere );

  torusKnot.userData.onUpdate = ( delta ) => {

    torusKnot.rotation.y += delta / 2;
    torusKnot.rotation.z -= delta / 4;

  };

  return torusKnot;

}

import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  const plinth = createPlinth();
  const shape = createShapes();

  return { plinth, shape };

}
