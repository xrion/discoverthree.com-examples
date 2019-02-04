function initMeshes( scene ) {

  const geometry = new THREE.SphereBufferGeometry( 1, 16, 16 );
  const material = new THREE.MeshStandardMaterial( {
    flatShading: true,
  } );

  // remember to convert the color to linear so that it looks correct
  // by the time it ends up on our screens!
  material.color.convertSRGBToLinear();

  const protoMesh = new THREE.Mesh( geometry, material );

  for ( let i = 0; i < 100; i++ ) {

    const mesh = protoMesh.clone();

    const x = THREE.Math.randFloatSpread( -20, 20 );
    const y = THREE.Math.randFloatSpread( -20, 20 );
    const z = THREE.Math.randFloatSpread( -20, 20 );

    mesh.position.set( x, y, z );

    mesh.userData.onUpdate = ( delta ) => {

      mesh.rotation.y += delta / 5;

    };

    scene.add( mesh );

  }

}
