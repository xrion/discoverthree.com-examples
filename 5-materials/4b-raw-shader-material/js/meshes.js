function createMeshes( scene ) {

  // create a geometry
  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  const tempMat = new THREE.MeshBasicMaterial();

  const mesh = new THREE.Mesh( geometry, tempMat );

  scene.add( mesh );

  return mesh;

}
