function initMeshes( scene ) {

  // create a geometry
  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  const material = new THREE.MeshStandardMaterial( { color: 0x800080 } );

  const mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.y -= delta / 5;

  };

}
