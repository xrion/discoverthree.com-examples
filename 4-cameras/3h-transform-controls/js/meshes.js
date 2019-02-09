function createMeshes( scene ) {

  const ground = initGround( scene );
  const shapes = initShapes( scene );

  return { ground, shapes };

}

function initGround( scene ) {

  const geometry = new THREE.CylinderBufferGeometry( 18, 18, 1, 64, 1 );

  const material = new THREE.MeshStandardMaterial( {
    metalness: 0.1,
    roughness: 0.8,
  } );

  const mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

  return mesh;

}

function initShapes( scene ) {

  const torusKnotGeo = new THREE.TorusKnotBufferGeometry( 3, 0.375, 32, 32, 1, 1 );
  const torusKnotMat = new THREE.MeshStandardMaterial( {
    color: 0x000000,
  } );

  const torusKnot = new THREE.Mesh( torusKnotGeo, torusKnotMat );
  torusKnot.position.set( 0, 6, 0 );

  const sphereGeo = new THREE.SphereBufferGeometry( 1.875, 32, 32 );
  const sphereMat = new THREE.MeshStandardMaterial();

  const sphere = new THREE.Mesh( sphereGeo, sphereMat );
  sphere.position.set( 1.125, 0, 0 );

  torusKnot.add( sphere );

  torusKnot.userData.animate = true;

  torusKnot.userData.material = torusKnotMat;
  sphere.userData.material = sphereMat;

  torusKnot.userData.onUpdate = ( delta ) => {

    if ( torusKnot.userData.animate ) {

      torusKnot.rotation.y += delta / 2;
      torusKnot.rotation.z -= delta / 4;

    }

  };

  scene.add( torusKnot );

  return torusKnot;

}
