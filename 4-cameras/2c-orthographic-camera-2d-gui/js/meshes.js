function createMeshes() {

  const geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );
  geometry.rotateX( -Math.PI / 2 );

  const material = new THREE.MeshStandardMaterial( {
    color: 0x001100,
    metalness: 0,
    roughness: 1,
  } );

  const ground = new THREE.Mesh( geometry, material );

  return { ground };

}
