function createMeshes( scene ) {

  const torusKnotGeo = new THREE.TorusKnotBufferGeometry( 3, 0.375, 64, 32, 1, 1 );
  const torusKnotMat = new THREE.MeshStandardMaterial( {
    color: 0x000000,
  } );

  const torusKnot = new THREE.Mesh( torusKnotGeo, torusKnotMat );
  torusKnot.position.set( 0, 0, 0 );

  const sphereGeo = new THREE.SphereBufferGeometry( 1.875, 32, 32 );
  const sphereMat = new THREE.MeshStandardMaterial();

  const sphere = new THREE.Mesh( sphereGeo, sphereMat );
  sphere.position.set( 1.125, 0, 0 );

  torusKnot.add( sphere );

  scene.add( torusKnot );

  return torusKnot;

}
