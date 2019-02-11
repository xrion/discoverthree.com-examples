function createMeshes( material ) {

  const geometry = new BoxBufferGeometry( 2, 2, 2 );

  const box = new Mesh( geometry, material );

  return { box };

}
