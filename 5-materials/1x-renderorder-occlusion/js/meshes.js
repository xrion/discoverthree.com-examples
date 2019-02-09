function createMeshes() {

  const geometry = new THREE.CircleBufferGeometry( 8, 128 );
  const material = new THREE.MeshBasicMaterial( { color: 0x800080 } );

  const moon = new THREE.Mesh( geometry, material );

  moon.position.set( 0, 0, -15 );

  moon.renderOrder = 1;

  return { moon };

}
