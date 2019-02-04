function initMeshes( scene ) {

  // create a plane geometry. The vertices of this plane will
  // be at -1 and 1 on the X axis and Y axis, meaning that
  // if we don't transform them by any matrices then the
  // plane will take up the full screen
  const geometry = new THREE.PlaneBufferGeometry( 2, 2 );

  const tempMat = new THREE.MeshBasicMaterial();

  const mesh = new THREE.Mesh( geometry, tempMat );

  scene.add( mesh );

  return mesh;

}
