import {
  Mesh,
  MeshStandardMaterial,
  SphereBufferGeometry,
  TorusKnotBufferGeometry,
} from './vendor/three/three.module.js';

function createShapes() {

  const torusKnotGeo = new TorusKnotBufferGeometry( 3, 0.375, 64, 32, 1, 1 );
  const torusKnotMat = new MeshStandardMaterial( {
    color: 0x000000,
  } );

  const torusKnot = new Mesh( torusKnotGeo, torusKnotMat );

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

export default function createMeshes() {

  const shapes = createShapes();

  return { shapes };

}
