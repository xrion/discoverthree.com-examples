import {
  SphereBufferGeometry,
  Math as MathUtils,
  Mesh,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  // we'll add the meshes to overlapping groups
  // (meshes can be in multiple groups)
  const groupA = [];
  const groupB = [];
  const groupC = [];
  const groupD = [];

  // we can share the geometry between the meshes since we are
  // not animating an geometry properties
  const geometry = new SphereBufferGeometry( 1, 16, 16 );

  // but we will need to clone the material for each mesh
  // other, when we animate the opacity or color of one, all the
  // meshes color will change
  const protoMaterial = new MeshStandardMaterial( {
    flatShading: true,

    // remember to set transparent to true if you want to
    // animate the opacity!
    transparent: true,
  } );

  for ( let i = 0; i < 100; i++ ) {

    const mesh = new Mesh( geometry, protoMaterial.clone() );

    const x = MathUtils.randFloatSpread( -20, 20 );
    const y = MathUtils.randFloatSpread( -20, 20 );
    const z = MathUtils.randFloatSpread( -20, 20 );

    mesh.position.set( x, y, z );

    if( i % 2 === 0 ) groupA.push( mesh );
    else groupB.push( mesh );

    if( i % 5 === 0 ) groupC.push( mesh );
    else groupD.push( mesh );

  }

  return { groupA, groupB, groupC, groupD };

}
