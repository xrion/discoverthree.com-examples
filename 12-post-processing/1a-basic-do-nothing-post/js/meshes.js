import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  const geometry = new BoxBufferGeometry( 2, 2, 2 );

  const material = new MeshBasicMaterial( { color: 0x800080 } );

  const box = new Mesh( geometry, material );

  box.userData.onUpdate = ( delta ) => {

    box.rotation.y -= delta / 5;

  };

  return { box };

}
