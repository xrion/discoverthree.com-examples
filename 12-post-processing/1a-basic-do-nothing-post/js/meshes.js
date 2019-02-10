function createMeshes() {

  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  const material = new THREE.MeshBasicMaterial( { color: 0x800080 } );

  const box = new THREE.Mesh( geometry, material );

  box.userData.onUpdate = ( delta ) => {

    box.rotation.y -= delta / 5;

  };

  return { box };

}
