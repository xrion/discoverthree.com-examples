function initGround( scene ) {

  const geometry = new THREE.CylinderBufferGeometry( 18, 18, 1, 64, 1 );

  const material = new THREE.MeshStandardMaterial( {
    metalness: 0.0,
    roughness: 0.5,
  } );

  const mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

}

function initBasePlane( scene ) {

  const geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );
  geometry.rotateX( -Math.PI / 2 );

  const material = new THREE.MeshStandardMaterial( {
    color: 0x0f0e0d,
    side: THREE.DoubleSide,
    roughness: 1,
    metalness: 0,
  } );

  const mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

}

function initShapes( scene ) {

  const torusKnotGeo = new THREE.TorusKnotBufferGeometry( 3, 0.375, 64, 32, 1, 1 );
  const torusKnotMat = new THREE.MeshStandardMaterial( {
    color: 0x000000,
  } );

  const torusKnot = new THREE.Mesh( torusKnotGeo, torusKnotMat );
  torusKnot.position.set( 10, 6, 0 );

  const sphereGeo = new THREE.SphereBufferGeometry( 1.875, 32, 32 );
  const sphereMat = new THREE.MeshStandardMaterial();

  const sphere = new THREE.Mesh( sphereGeo, sphereMat );
  sphere.position.set( 1.125, 0, 0 );

  torusKnot.add( sphere );

  const torusKnotLeft = torusKnot.clone();
  torusKnotLeft.position.set( 10, 6, -10 );

  const torusKnotRight = torusKnot.clone();
  torusKnotRight.position.set( -15, 6, 10 );

  scene.add( torusKnot, torusKnotLeft, torusKnotRight );

  torusKnot.userData.onUpdate = ( delta ) => {

    torusKnot.rotation.y += delta / 2;
    torusKnot.rotation.z -= delta / 4;

    torusKnotLeft.rotation.y -= delta / 2;
    torusKnotLeft.rotation.z -= delta / 6;

    torusKnotRight.rotation.y += delta / 6;
    torusKnotRight.rotation.z += delta / 2;

  };

  return { middle: torusKnot, front: torusKnotLeft, rear: torusKnotRight };

}

function initMeshes( scene ) {

  initGround( scene );
  initBasePlane( scene );

  return initShapes( scene );

}
