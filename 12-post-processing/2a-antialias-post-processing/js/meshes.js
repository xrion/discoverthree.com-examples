function initMeshes( scene ) {

  // create a geometry
  const geometry = new THREE.BoxBufferGeometry( 3, 4, 3, 4, 4, 4 );

  const material = new THREE.MeshStandardMaterial( { color: 0x800080, side: THREE.DoubleSide } );
  material.color.convertSRGBToLinear();

  const mesh = new THREE.Mesh( geometry, material );

  mesh.position.y = 1;

  scene.add( mesh );

  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.y -= delta / 5;

  };

  initWireframeToggle( mesh );

}
