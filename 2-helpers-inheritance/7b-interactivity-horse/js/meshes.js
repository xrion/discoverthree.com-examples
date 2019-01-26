function initGround( scene ) {

  const geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );

  // MeshLambertMaterial doesn't have an shiny (specular)
  // highlights, so we'll use this to give our ground a matte look
  const material = new THREE.MeshLambertMaterial( { color: 0x2E8B57 } );

  const ground = new THREE.Mesh(
    geometry,
    material,
  );

  ground.rotation.x = -Math.PI / 2;

  scene.add( ground );

  return ground;

}
