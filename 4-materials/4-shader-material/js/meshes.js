function initMeshes( material ) {

  // create a geometry
  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  mesh = new THREE.Mesh( geometry, material );

  app.scene.add( mesh );

}
