function initMeshes( scene ) {

  initGround( scene );
  initCube( scene );
  initKnot( scene );

}

function initGround( scene ) {

  const geometry = new THREE.PlaneBufferGeometry( 30, 30 );
  geometry.rotateX( -Math.PI / 2 );

  const material = new THREE.MeshStandardMaterial();

  const mesh = new THREE.Mesh( geometry, material );

  mesh.receiveShadow = true;

  scene.add( mesh );

}

function initCube( scene ) {

  const geometry = new THREE.BoxBufferGeometry( 1.5, 1.5, 1.5 );
  const material = new THREE.MeshStandardMaterial( { color: 0x800080 } );

  const mesh = new THREE.Mesh( geometry, material );
  mesh.position.set( -4, 2, 5 )

  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.y += delta / 4;
    mesh.rotation.z -= delta / 4;

  }

  mesh.castShadow = true;

  scene.add( mesh );

}

function initKnot( scene ) {

  const geometry = new THREE.TorusKnotBufferGeometry( 1, 0.25, 128, 64, 1, 2 );
  const material = new THREE.MeshStandardMaterial( { color: 0x344565 } );

  const mesh = new THREE.Mesh( geometry, material );
  mesh.position.set( 4, 3, 0 )

  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.x += delta / 2;
    mesh.rotation.z -= delta / 4;

  }

  mesh.castShadow = true;

  scene.add( mesh );

}


