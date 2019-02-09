function createMeshes() {

  // create a geometry
  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  const tempMat = new THREE.MeshBasicMaterial();

  const box = new THREE.Mesh( geometry, tempMat );

  return { box };

}
