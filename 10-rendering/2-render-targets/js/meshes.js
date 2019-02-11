import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
  TorusKnotBufferGeometry,
} from './vendor/three/three.module.js';

function createBox( texture ) {

  const geometry = new BoxBufferGeometry( 2, 2, 2 );

  const material = new MeshStandardMaterial( {
    map: texture,
  } );

  const box = new Mesh( geometry, material );

  return box;

}

function createTorusKnot() {

  const geometry = new TorusKnotBufferGeometry( 0.75, 0.2, 128, 32 );
  const material = new MeshStandardMaterial();
  const torusKnot = new Mesh( geometry, material );

  return torusKnot;

}

export default function createMeshes( texture ) {

  const box = createBox( texture );

  const torusKnot = createTorusKnot();

  // this won't work since our App is only calling
  // onUpdate functions for objects in the main app.scene
  // torusKnot.userData.onUpdate = ( delta ) => {
  //   torusKnot.rotation.x -= delta / 2;
  //   torusKnot.rotation.y -= delta / 2;
  //   torusKnot.rotation.z += delta / 2;
  // }

  // so we can hijack the onUpdate function from a different
  // function. It's a little hacky, but it's fine for this simple example
  box.userData.onUpdate = ( delta ) => {

    box.rotation.y -= delta / 5;

    torusKnot.rotation.x -= delta / 2;
    torusKnot.rotation.y -= delta / 2;
    torusKnot.rotation.z += delta / 2;

  };

  return { box, torusKnot };

}
