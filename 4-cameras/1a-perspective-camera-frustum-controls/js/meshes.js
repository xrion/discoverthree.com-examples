function createMeshes() {

  const geometry = new THREE.SphereBufferGeometry( 1, 16, 16 );
  const material = new THREE.MeshStandardMaterial( {
    flatShading: true,
  } );

  const protoMesh = new THREE.Mesh( geometry, material );

  const spheresArray = [];

  for ( let i = 0; i < 100; i++ ) {

    const mesh = protoMesh.clone();

    const x = THREE.Math.randFloatSpread( -20, 20 );
    const y = THREE.Math.randFloatSpread( -20, 20 );
    const z = THREE.Math.randFloatSpread( -20, 20 );

    mesh.position.set( x, y, z );

    mesh.userData.onUpdate = ( delta ) => {

      mesh.rotation.y += delta / 5;

    };

    spheresArray.push( mesh );

  }

  return { spheresArray };

}
