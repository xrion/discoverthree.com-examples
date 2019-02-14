import {
  Mesh,
} from './vendor/three/three.module.js';


function createPlinth( geometries, materials ) {

  const plinth = new Mesh( geometries.truncatedCone, materials.standardWhiteRough );

  plinth.receiveshadow = true;

  return plinth;

}

function createShapes( geometries, materials ) {

  const torusKnot = new Mesh( geometries.torusKnot, materials.standardBlack );
  torusKnot.position.set( 0, 6, 0 );

  torusKnot.receiveshadow = true;

  const sphere = new Mesh( geometries.sphere, materials.standardWhite );
  sphere.position.set( 1.125, 0, 0 );

  sphere.castshadow = true;
  sphere.receiveshadow = true;

  torusKnot.add( sphere );

  return torusKnot;

}

function createShadow( geometries, materials ) {

  const shadowMesh = new Mesh( geometries.circle, materials.shadow )
  shadowMesh.rotation.x = -Math.PI / 2; // -90 degrees around x axis
  // position the shadow mesh just above the surface of the ground
  shadowMesh.position.y = 0.51;

  shadowMesh.receiveShadow = true;

  return shadowMesh;

}

export default function createMeshes( geometries, materials ) {

  return {

    plinth: createPlinth( geometries, materials ),
    shadow: createShadow( geometries, materials ),
    shapes: createShapes( geometries, materials ),

  };

}
