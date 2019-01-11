function initMeshes() {

  // create a geometry
  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  const tempMat = new THREE.MeshBasicMaterial();

  mesh = new THREE.Mesh( geometry, tempMat );

  app.scene.add( mesh );

  return mesh;

}
