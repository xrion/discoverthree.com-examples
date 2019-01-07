function initMeshes() {

  // create a geometry
  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  const material = new THREE.MeshStandardMaterial( { color: 0x800080 } );


  mesh = new THREE.Mesh( geometry, material );

  app.scene.add( mesh );

}
