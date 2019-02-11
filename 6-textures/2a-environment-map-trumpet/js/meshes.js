import {
  CylinderBufferGeometry,
  Mesh,
} from './vendor/three/three.module.js';

function createPlinth( materials ) {

  const geometry = new CylinderBufferGeometry( 1, 0.5, 1, 64, 1 );

  const plinth = new Mesh( geometry, materials.plinth );
  plinth.position.y = -0.5;

  return plinth;

}

export default function createMeshes( materials ) {

  return {
    plinth: createPlinth( materials ),
  };

}
