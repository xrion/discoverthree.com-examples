import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  const geometry = new BoxBufferGeometry( 2, 2, 2 );

  const tempMat = new MeshBasicMaterial();

  const box = new Mesh( geometry, tempMat );

  return { box };

}
