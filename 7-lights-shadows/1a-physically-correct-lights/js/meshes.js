function initMeshes( scene ) {

  initGround( scene );
  initShapes( scene );

}

function initGround( scene ) {

  const geometry = new THREE.CylinderBufferGeometry( 18, 18, 1, 64, 1 );

  const material = new THREE.MeshStandardMaterial( {
    metalness: 0.1,
    roughness: 0.8,
  } );

  // remember to convert the color to linear so that it looks correct
  // by the time it ends up on our screens!
  material.color.convertSRGBToLinear();

  const mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

}

function initShapes( scene ) {

  const torusKnotGeo = new THREE.TorusKnotBufferGeometry( 3, 0.375, 64, 32, 1, 1 );
  const torusKnotMat = new THREE.MeshStandardMaterial( {
    color: 0x000000,
  } );

  // remember to convert the color to linear so that it looks correct
  // by the time it ends up on our screens!
  torusKnotMat.color.convertSRGBToLinear();

  const torusKnot = new THREE.Mesh( torusKnotGeo, torusKnotMat );
  torusKnot.position.set( 0, 6, 0 );

  const sphereGeo = new THREE.SphereBufferGeometry( 1.875, 32, 32 );
  const sphereMat = new THREE.MeshStandardMaterial();

  // remember to convert the color to linear so that it looks correct
  // by the time it ends up on our screens!
  sphereMat.color.convertSRGBToLinear();

  const sphere = new THREE.Mesh( sphereGeo, sphereMat );
  sphere.position.set( 1.125, 0, 0 );

  torusKnot.add( sphere );

  torusKnot.userData.onUpdate = ( delta ) => {

    torusKnot.rotation.y += delta / 2;
    torusKnot.rotation.z -= delta / 4;

  };

  torusKnot.castShadow = true;

  scene.add( torusKnot );

}
