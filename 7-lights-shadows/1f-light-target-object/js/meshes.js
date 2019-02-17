import {
  Mesh,
} from './vendor/three/three.module.js';

function createPlinth( geometries, materials ) {

  return new Mesh( geometries.truncatedCone, materials.standardWhiteRough );
}

// function createGround( geometries, materials ) {

//   const geometry = new PlaneBufferGeometry( 1000, 1000 );
//   geometry.rotateX( -Math.PI / 2 );

//   const material = new MeshBasicMaterial( {
//     color: 0x020202,
//     side: DoubleSide,
//   } );

//   const ground = new Mesh( geometry, material );

//   return ground;

// }

function createShapes( geometries, materials ) {

  const torusKnot = new Mesh( geometries.torusKnot, materials.standardBlack );
  torusKnot.position.set( 10, 6, 0 );

  const sphere = new Mesh( geometries.sphere, materials.standardWhite );
  sphere.position.set( 1.125, 0, 0 );

  torusKnot.add( sphere );

  const torusKnotRear = torusKnot.clone();
  torusKnotRear.position.set( 10, 6, -10 );

  const torusKnotFront = torusKnot.clone();
  torusKnotFront.position.set( -15, 6, 10 );

  return { middle: torusKnot, front: torusKnotFront, rear: torusKnotRear };

}

export default function createMeshes( geometries, materials ) {

  return {
    plinth: createPlinth( geometries, materials ),
    // ground: createGround( geometries, materials ),
    targets: createShapes( geometries, materials ),
  };

}
