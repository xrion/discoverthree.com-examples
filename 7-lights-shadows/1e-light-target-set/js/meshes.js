import {
  Mesh,
} from './vendor/three/three.module.js';

function createPlinth( geometries, materials ) {

  return new Mesh( geometries.truncatedCone, materials.standard );
}

export default function createMeshes( geometries, materials ) {

  return {

    plinth: createPlinth( geometries, materials ),

  };

}
