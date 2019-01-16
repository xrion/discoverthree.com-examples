function initMeshes( scene ) {

  initGround( scene );
  initShapes( scene );

}

function initGround( scene ) {

  const geometry = new THREE.BoxBufferGeometry( 30, 30, 1 );
  geometry.rotateX( -Math.PI / 2 );

  const material = new THREE.MeshStandardMaterial( {
    metalness: 0.1,
    roughness: 0.8,
  } );

  const mesh = new THREE.Mesh( geometry, material );

  mesh.receiveShadow = true;

  scene.add( mesh );

}

function initShapes( scene ) {

  const geometry = new THREE.TorusKnotBufferGeometry( 2, 0.25, 128, 64, 1, 1 );
  const material = new THREE.MeshStandardMaterial( {
    color: 0x000000,
  } );

  const loop = new THREE.Mesh( geometry, material );
  loop.position.set( 0, 4, 0 );

  loop.userData.onUpdate = ( delta ) => {

    loop.rotation.y += delta / 2;
    loop.rotation.z -= delta / 4;

  };

  loop.castShadow = true;

  scene.add( loop );

  const sphereGeo = new THREE.SphereBufferGeometry( 1.25, 64, 64 );
  const sphereMat = new THREE.MeshStandardMaterial( {
    color: 0xffffff,
    // metalness: 1,
    // roughness: 0.0
  } );

  const sphere = new THREE.Mesh( sphereGeo, sphereMat );
  sphere.position.set( 0.75, 0, 0 );

  sphere.castShadow = true;
  sphere.receiveShadow = true;

  loop.add( sphere );

}
