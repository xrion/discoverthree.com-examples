import {
  SphereBufferGeometry,
  Math as MathUtils,
  Mesh,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  const geometry = new SphereBufferGeometry( 1, 16, 16 );
  const material = new MeshStandardMaterial( {
    flatShading: true,
  } );

  const protoMesh = new Mesh( geometry, material );

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
