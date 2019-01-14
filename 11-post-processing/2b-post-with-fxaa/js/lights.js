function initLights( scene ) {

  const ambientLight = new THREE.AmbientLight( 0x333333, 1 );
  scene.add( ambientLight );

  const frontLight = new THREE.DirectionalLight( 0xffffff, 2.5 );
  frontLight.position.set( 10, 10, 10 );

  const backLight = new THREE.DirectionalLight( 0xffffff, 1 );
  backLight.position.set( -10, 10, -10 );

  scene.add( frontLight, backLight );

  return { ambientLight, frontLight, backLight };

}