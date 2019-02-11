import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  const geometry = new BoxBufferGeometry( 2, 2, 2 );
  const material = new MeshStandardMaterial( { color: 0x800080 } );

  const box = new Mesh( geometry, material );

  return { box };

}
