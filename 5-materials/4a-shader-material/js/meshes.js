function createMeshes( material ) {

  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
  const box = new THREE.Mesh( geometry, material );

  return { box };

}
