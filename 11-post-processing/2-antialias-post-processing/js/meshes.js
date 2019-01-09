function initMeshes( scene ) {

  // create a geometry
  const geometry = new THREE.BoxBufferGeometry( 64, 100, 64, 4, 4, 4 );

  const material = new THREE.MeshStandardMaterial( { color: 0x800080, side: THREE.DoubleSide });

  const mesh = new THREE.Mesh( geometry, material );

  mesh.position.y = 64;

  scene.add( mesh );

  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.y -= delta / 5;

  }

  initWireframeToggle( mesh );

}