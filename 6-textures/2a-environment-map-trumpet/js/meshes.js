import {
  Mesh,
} from './vendor/three/three.module.js';

function createPlinth( geometries, materials ) {

  const plinth = new Mesh( geometries.truncatedCone, materials.plinth );
  plinth.position.y = -0.5;

  return plinth;

}

export default function createMeshes( geometries, materials ) {

  return {

    plinth: createPlinth( geometries, materials ),

  };

}
