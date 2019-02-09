function createPlinth( materials ) {

  const geometry = new THREE.CylinderBufferGeometry( 1, 0.5, 1, 64, 1 );

  const plinth = new THREE.Mesh( geometry, materials.plinth );
  plinth.position.y = -0.5;

  return plinth;

}

function createMeshes( materials ) {

  const plinth = createPlinth( materials );

  return { plinth };

}