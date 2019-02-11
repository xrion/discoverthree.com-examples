import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  const geometry = createGeometry( 2, 1 );
  const material = new MeshStandardMaterial( { color: 0x800080, side: DoubleSide } );

  const superMesh = new Mesh( geometry, material );

  return { superMesh };

}
