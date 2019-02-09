function createMeshes( scene ) {

  const geometry = new THREE.CircleBufferGeometry( 8, 128 );
  const material = new THREE.MeshBasicMaterial( { color: 0x800080 } );

  // remember to convert the color to Linear space!
  material.color.convertGammaToLinear( 2.2 );

  const mesh = new THREE.Mesh( geometry, material );

  mesh.position.set( 0, 0, -15 );

  mesh.renderOrder = 1;

  scene.add( mesh );

  return mesh;

}
