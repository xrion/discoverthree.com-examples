function initMeshes( scene ) {

  // create a geometry
  const geometry = new THREE.BoxBufferGeometry( 64, 80, 64, 4, 4, 4 );

  const material = new THREE.MeshStandardMaterial( { color: 0x800080, side: THREE.DoubleSide } );

  // remember to convert the color to linear so that it looks correct
  // by the time it ends up on our screens!
  material.color.convertSRGBToLinear();

  const mesh = new THREE.Mesh( geometry, material );

  mesh.position.y = 50;

  scene.add( mesh );

  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.y -= delta / 5;

  };

  initWireframeToggle( mesh );

}
