function wireframeControl( material ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    material.wireframe = !material.wireframe;

    e.preventDefault();

  } );
}

import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  const geometry = createGeometry();

  const material = new MeshBasicMaterial( { wireframe: true } );
  wireframeControl( material );

  const tri = new Mesh( geometry, material );

  return { tri };

}
