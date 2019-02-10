function createMeshes() {

  const geometry = createGeometry( 2, 1 );
  const material = new THREE.MeshStandardMaterial( { color: 0x800080, side: THREE.DoubleSide } );

  const superMesh = new THREE.Mesh( geometry, material );

  return { superMesh };

}
