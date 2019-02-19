import {
  Math as MathUtils,
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  // we'll add the meshes to overlapping groups
  // (meshes can be in multiple groups)
  const animationGroupA = [];
  const animationGroupB = [];
  const animationGroupC = [];
  const animationGroupD = [];

  const allMeshes = [];

  for ( let i = 0; i < 100; i++ ) {

    const mesh = new Mesh( geometries.sphere, materials.standard.clone() );

    const x = MathUtils.randFloatSpread( -20, 20 );
    const y = MathUtils.randFloatSpread( -20, 20 );
    const z = MathUtils.randFloatSpread( -20, 20 );

    mesh.position.set( x, y, z );

    if ( i % 2 === 0 ) animationGroupA.push( mesh );
    else animationGroupB.push( mesh );

    if ( i % 5 === 0 ) animationGroupC.push( mesh );
    else animationGroupD.push( mesh );

    allMeshes.push( mesh );

  }

  return {

    animationGroupA,
    animationGroupB,
    animationGroupC,
    animationGroupD,
    allMeshes,

  };

}
