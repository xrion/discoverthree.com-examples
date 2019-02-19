import {
  Mesh,
} from './vendor/three/three.module.js';

function createShapes( geometries, materials ) {

  const torusKnot = new Mesh( geometries.torusKnot, materials.standardBlack );

  const sphere = new Mesh( geometries.sphere, materials.standardWhite );
  sphere.position.set( 1.125, 0, 0 );

  torusKnot.add( sphere );

  return torusKnot;

}

export default function createMeshes( geometries, materials ) {

  return {

    shapes: createShapes( geometries, materials ),

  };

}
