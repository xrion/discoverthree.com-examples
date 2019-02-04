function initMeshes( scene ) {

  const geometry = new THREE.SphereBufferGeometry( 20, 16, 16 );
  const material = new THREE.MeshStandardMaterial( {
    flatShading: true,
  } );

  // remember to convert the color to linear so that it looks correct
  // by the time it ends up on our screens!
  material.color.convertSRGBToLinear();

  const protoMesh = new THREE.Mesh( geometry, material );

  for ( let i = 0; i < 100; i++ ) {

    const mesh = protoMesh.clone();

    const x = THREE.Math.randFloatSpread( -500, 500 );
    const y = THREE.Math.randFloatSpread( -500, 500 );
    const z = THREE.Math.randFloatSpread( -500, 500 );

    mesh.position.set( x, y, z );

    mesh.userData.onUpdate = ( delta ) => {

      mesh.rotation.y += delta / 5;

    };

    scene.add( mesh );

  }

}
