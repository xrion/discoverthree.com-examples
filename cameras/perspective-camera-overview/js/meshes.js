import {
  Math as MathUtils,
  Mesh,
} from './vendor/three/three.module.js';

export default function createMeshes( geometries, materials ) {

  const protoMesh = new Mesh( geometries.sphere, materials.standard );

  const spheresArray = [];

  for ( let i = 0; i < 100; i++ ) {

    const mesh = protoMesh.clone();

    const x = MathUtils.randFloatSpread( -20, 20 );
    const y = MathUtils.randFloatSpread( -20, 20 );
    const z = MathUtils.randFloatSpread( -20, 20 );

    mesh.position.set( x, y, z );

    mesh.userData.onUpdate = ( delta ) => {

      mesh.rotation.y += delta / 5;

    };

    spheresArray.push( mesh );

  }

  return { spheresArray };

}
