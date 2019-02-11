function initGroundShadow() {

  const geometry = new THREE.CircleBufferGeometry( 18, 64 );

  const material = new THREE.ShadowMaterial( {
    color: 0x000000,
    opacity: 0.2,
  } );


  const shadowMesh = new Mesh( geometry, material );

  shadowMesh.rotation.x = -Math.PI / 2; // -90 degrees around x axis

  // position the shadow mesh just above the surface of the ground
  shadowMesh.position.y = 0.51;

  shadowMesh.receiveShadow = true;

  return shadowMesh;

}
