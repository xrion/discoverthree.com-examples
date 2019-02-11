import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  const torusKnotGeo = new TorusKnotBufferGeometry( 3, 0.375, 64, 32, 1, 1 );
  const torusKnotMat = new MeshStandardMaterial( {
    color: 0x000000,
    transparent: true,
  } );

  const torusKnot = new Mesh( torusKnotGeo, torusKnotMat );
  torusKnot.position.set( 0, 0, 0 );

  const sphereGeo = new SphereBufferGeometry( 1.875, 32, 32 );
  const sphereMat = new MeshStandardMaterial();

  const sphere = new Mesh( sphereGeo, sphereMat );
  sphere.position.set( 1.125, 0, 0 );

  torusKnot.add( sphere );

  return { torusKnot };

}
