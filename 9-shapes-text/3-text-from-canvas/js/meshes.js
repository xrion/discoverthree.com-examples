function createMeshes( canvasTexture ) {

  const material = new THREE.MeshStandardMaterial( {
    map: canvasTexture,
  } );

  const boxGeo = new THREE.BoxBufferGeometry( 2, 2, 2 );
  const box = new THREE.Mesh( boxGeo, material );
  box.position.x += 1.5;

  const sphereGeo = new THREE.SphereBufferGeometry( 1, 128, 128 );
  const sphere = new THREE.Mesh( sphereGeo, material );
  sphere.position.x -= 1.5;

  return { box, sphere };

}
