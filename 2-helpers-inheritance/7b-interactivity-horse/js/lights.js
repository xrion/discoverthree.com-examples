function initLights( scene ) {

  const ambientLight = new THREE.HemisphereLight( 0xcccccc, 0x444444, 0.5 );

  const frontLight = new THREE.DirectionalLight( 0xffffff, 0.75 );
  frontLight.position.set( 10, 10, 10 );

  const backLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
  backLight.position.set( -10, 10, -10 );

  scene.add( ambientLight, frontLight, backLight );

  return { ambientLight, frontLight, backLight };

}
