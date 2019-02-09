function createMeshes( scene, materials ) {

  initPlinth( scene, materials );

}

function initPlinth( scene, materials ) {

  const geometry = new THREE.CylinderBufferGeometry( 1, 0.5, 1, 64, 1 );

  const mesh = new THREE.Mesh( geometry, materials.plinth );
  mesh.position.y = -0.5;

  mesh.receiveShadow = true;

  scene.add( mesh );

}
