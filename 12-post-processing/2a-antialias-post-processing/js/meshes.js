import {
  BoxBufferGeometry,
  DoubleSide,
  Mesh,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  const geometry = new BoxBufferGeometry( 3, 4, 3, 4, 4, 4 );

  const material = new MeshStandardMaterial( { color: 0x800080, side: DoubleSide } );

  const box = new Mesh( geometry, material );

  box.position.y = 1;

  box.userData.onUpdate = ( delta ) => {

    box.rotation.y -= delta / 5;

  };

  initWireframeToggle( box );

  return { box };

}
