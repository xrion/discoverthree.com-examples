function initGroundShadow( scene ) {

  const geometry = new THREE.CircleBufferGeometry( 18, 64 );

  const material = new THREE.ShadowMaterial( {
    color: 0x000000,
    opacity: 0.2,
  } );

  // remember to convert the color to linear so that it looks correct
  // by the time it ends up on our screens!
  material.color.convertSRGBToLinear();

  // TODO: change color in the color picker as well

  const mesh = new THREE.Mesh( geometry, material );

  mesh.rotation.x = - Math.PI / 2; // -90 degrees around x axis

  // position the shadow mesh just above the surface of the ground
  mesh.position.y = 0.51;

  mesh.receiveShadow = true;

  scene.add( mesh );

  return mesh;

}
