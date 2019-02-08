function initMeshes( scene, materials ) {

  initPlinth( scene, materials );

}

function initPlinth( scene, materials ) {

  console.log( materials.plinth );

  const geometry = new THREE.CylinderBufferGeometry( 1, 0.5, 1, 64, 1 );

  const mesh = new THREE.Mesh( geometry, materials.plinth );
  mesh.position.y = -0.5;

  scene.add( mesh );

}
