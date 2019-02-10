function createMeshes() {

  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  const material = new THREE.MeshStandardMaterial( { color: 0x800080 } );

  const box = new THREE.Mesh( geometry, material );

  box.position.y = -1;

  box.userData.onUpdate = ( delta ) => {

    box.rotation.y -= delta / 5;

  };

  return { box };

}
