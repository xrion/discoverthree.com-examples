function initMeshes( scene ) {

  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  const material = new THREE.MeshStandardMaterial( { color: 0x800080 } );

  // remember to convert the color to linear so that it looks correct
  // by the time it ends up on our screens!
  material.color.convertSRGBToLinear();

  const mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.y -= delta / 5;

  };

}
