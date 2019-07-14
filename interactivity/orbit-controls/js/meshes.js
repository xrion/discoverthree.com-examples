import {
  Mesh,
} from './vendor/three/three.module.js';


function createPlinth( geometries, materials ) {

  const plinth = new Mesh( geometries.truncatedCone, materials.standardWhiteRough );

  return plinth;

}

function createShapes( geometries, materials ) {

  const torusKnot = new Mesh( geometries.torusKnot, materials.standardBlack );
  torusKnot.position.set( 0, 6, 0 );

  const sphere = new Mesh( geometries.sphere, materials.standardWhite );
  sphere.position.set( 1.125, 0, 0 );

  torusKnot.add( sphere );

  return torusKnot;

}

export default function createMeshes( geometries, materials ) {

  return {

    plinth: createPlinth( geometries, materials ),
    shapes: createShapes( geometries, materials ),

  };

}
