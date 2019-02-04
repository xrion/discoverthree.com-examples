function initMeshes( scene, material ) {

  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  const mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

  return mesh;

}
