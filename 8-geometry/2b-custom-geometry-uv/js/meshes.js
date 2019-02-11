import {
  MeshBasicMaterial,
  Mesh,
  sRGBEncoding,
  TextureLoader,
} from './vendor/three/three.module.js';

function wireframeControl( material ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    material.wireframe = !material.wireframe;

    e.preventDefault();

  } );
}

export default function createMeshes( geometry ) {

  const textureLoader = new TextureLoader();
  const map = textureLoader.load( 'textures/color/phoenix_park_dublin.jpg' );
  map.encoding = sRGBEncoding;

  const material = new MeshBasicMaterial( {
    map,
  } );
  wireframeControl( material );

  const tri = new Mesh( geometry, material );

  return { tri };

}
