import {
  MeshBasicMaterial,
  Mesh,
} from './vendor/three/three.module.js';

function wireframeControl( material ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    material.wireframe = !material.wireframe;

    e.preventDefault();

  } );
}

export default function createMeshes( geometry ) {

  const material = new MeshBasicMaterial( { wireframe: true } );
  wireframeControl( material );

  const tri = new Mesh( geometry, material );

  return { tri };

}
