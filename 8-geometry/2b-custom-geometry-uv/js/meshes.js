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

  const map = new TextureLoader().load( 'textures/color/phoenix_park_dublin.jpg' );
  map.encoding = sRGBEncoding;

  const material = new MeshBasicMaterial( { map, wireframe: false } );
  wireframeControl( material );

  const quad = new Mesh( geometry, material );

  return { quad };

}
