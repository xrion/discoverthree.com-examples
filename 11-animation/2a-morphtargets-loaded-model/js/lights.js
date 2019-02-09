function createLights( scene ) {

  const ambientLight = new THREE.HemisphereLight( 0xcccccc, 0x555555, 1 );

  const frontLight = new THREE.DirectionalLight( 0xffffff, 0.25 );
  frontLight.position.set( 10, 10, 20 );

  const backLight = new THREE.DirectionalLight( 0xffffff, 0.25 );
  backLight.position.set( -10, 10, -20 );

  scene.add( ambientLight, frontLight, backLight );

  return { ambientLight, frontLight, backLight };

}