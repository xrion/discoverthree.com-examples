function initMeshes( scene ) {

  initGround( scene );
  initKnot( scene );

}

function initGround( scene ) {

  const geometry = new THREE.BoxBufferGeometry( 30, 30, 1 );
  geometry.rotateX( -Math.PI / 2 );

  const material = new THREE.MeshStandardMaterial( {
    metalness: 0.1,
    roughness: 0.8,
  } );

  const mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

}

function initCube( scene ) {

  const geometry = new THREE.SphereBufferGeometry( 1.25, 64, 64 );
  const material = new THREE.MeshStandardMaterial( {
    color: 0xffffff,
    // metalness: 1,
    // roughness: 0.0
  } );

  const mesh = new THREE.Mesh( geometry, material );
  mesh.position.set( 0.75, 0, 0 )

  // mesh.userData.onUpdate = ( delta ) => {

  //   mesh.rotation.y += delta / 4;
  //   mesh.rotation.z -= delta / 4;

  // }

  scene.add( mesh );

}

function initKnot( scene ) {

  const geometry = new THREE.TorusKnotBufferGeometry( 2, 0.25, 128, 64, 1, 1 );
  const material = new THREE.MeshStandardMaterial( {
    color: 0x000000,
  } );

  const mesh = new THREE.Mesh( geometry, material );
  mesh.position.set( 0, 4, 0 )

  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.y += delta / 2;
    mesh.rotation.z -= delta / 4;

  }

  initCube( mesh );

  scene.add( mesh );

}


