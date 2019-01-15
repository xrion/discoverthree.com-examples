function initMeshes( scene ) {

  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
  const material = new THREE.MeshBasicMaterial( { color: 0x800080 } );

  const mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

  console.log( 'Here\s the cube buffer geometry you just created: ', geometry );

  return mesh;

}
