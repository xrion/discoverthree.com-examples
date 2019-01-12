function initMeshes( material ) {

  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  mesh = new THREE.Mesh( geometry, material );

  return mesh;

}
