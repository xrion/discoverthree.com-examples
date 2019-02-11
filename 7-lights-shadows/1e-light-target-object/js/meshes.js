import {
  CylinderBufferGeometry,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneBufferGeometry,
  SphereBufferGeometry,
  TorusKnotBufferGeometry,
} from './vendor/three/three.module.js';

function createPlinth() {

  const geometry = new CylinderBufferGeometry( 18, 18, 1, 64, 1 );

  const material = new MeshStandardMaterial( {
    metalness: 0.0,
    roughness: 0.5,
  } );

  const ground = new Mesh( geometry, material );

  return ground;
}

function createGround() {

  const geometry = new PlaneBufferGeometry( 1000, 1000 );
  geometry.rotateX( -Math.PI / 2 );

  const material = new MeshBasicMaterial( {
    color: 0x020202,
    side: DoubleSide,
  } );

  const ground = new Mesh( geometry, material );

  return ground;

}

function createShapes() {

  const torusKnotGeo = new TorusKnotBufferGeometry( 3, 0.375, 64, 32, 1, 1 );
  const torusKnotMat = new MeshStandardMaterial( {
    color: 0x000000,
  } );

  const torusKnot = new Mesh( torusKnotGeo, torusKnotMat );
  torusKnot.position.set( 10, 6, 0 );

  const sphereGeo = new SphereBufferGeometry( 1.875, 32, 32 );
  const sphereMat = new MeshStandardMaterial();

  const sphere = new Mesh( sphereGeo, sphereMat );
  sphere.position.set( 1.125, 0, 0 );

  torusKnot.add( sphere );

  const torusKnotLeft = torusKnot.clone();
  torusKnotLeft.position.set( 10, 6, -10 );

  const torusKnotRight = torusKnot.clone();
  torusKnotRight.position.set( -15, 6, 10 );

  torusKnot.userData.onUpdate = ( delta ) => {

    torusKnot.rotation.y += delta / 2;
    torusKnot.rotation.z -= delta / 4;

    torusKnotLeft.rotation.y -= delta / 2;
    torusKnotLeft.rotation.z -= delta / 6;

    torusKnotRight.rotation.y += delta / 6;
    torusKnotRight.rotation.z += delta / 2;

  };

  return { middle: torusKnot, front: torusKnotLeft, rear: torusKnotRight };

}

export default function createMeshes() {

  return {
    plinth: createPlinth(),
    ground: createGround(),
    targets: createShapes(),
  };

}
