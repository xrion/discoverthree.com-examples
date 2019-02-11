function createPlinth( materials ) {

  const geometry = new CylinderBufferGeometry( 1, 0.5, 1, 64, 1 );

  const plinth = new Mesh( geometry, materials.plinth );
  plinth.position.y = -0.5;

  plinth.receiveShadow = true;

  return plinth;

}

function createMeshes( materials ) {

  const plinth = createPlinth( materials );

  return { plinth };

}
