function createMeshes( canvasTexture ) {

  const material = new MeshStandardMaterial( {
    map: canvasTexture,
  } );

  const boxGeo = new BoxBufferGeometry( 2, 2, 2 );
  const box = new Mesh( boxGeo, material );
  box.position.x += 1.5;

  const sphereGeo = new SphereBufferGeometry( 1, 128, 128 );
  const sphere = new Mesh( sphereGeo, material );
  sphere.position.x -= 1.5;

  return { box, sphere };

}
