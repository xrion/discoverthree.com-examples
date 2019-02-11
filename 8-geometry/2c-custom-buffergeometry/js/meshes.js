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
  const geometryIndexed = createGeometryIndexed();

  const material = new MeshBasicMaterial( { wireframe: true } );
  wireframeControl( material );

  const leftQuad = new Mesh( geometry, material );
  leftQuad.position.x -= 1.5;

  const rightQuad = new Mesh( geometryIndexed, material );
  rightQuad.position.x += 1.5;

  return { leftQuad, rightQuad };

}
