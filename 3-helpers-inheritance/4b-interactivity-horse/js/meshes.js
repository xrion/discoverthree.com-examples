function createMeshes() {

  const geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );


  const material = new THREE.MeshStandardMaterial( {
    color: 0x000800,
    metalness: 0,
    roughness: 1,
  } );

  const ground = new THREE.Mesh( geometry, material );

  ground.rotation.x = -Math.PI / 2;

  return { ground };

}
