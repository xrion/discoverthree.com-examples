function createMeshes() {

  const geometry = new THREE.BoxBufferGeometry( 3, 4, 3, 4, 4, 4 );

  const material = new THREE.MeshStandardMaterial( { color: 0x800080, side: THREE.DoubleSide } );

  const box = new THREE.Mesh( geometry, material );

  box.position.y = 1;

  box.userData.onUpdate = ( delta ) => {

    box.rotation.y -= delta / 5;

  };

  initWireframeToggle( box );

  return { box };

}
