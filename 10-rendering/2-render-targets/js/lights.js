function createLights( scene, sceneRT ) {

  const ambientLight = new THREE.AmbientLight( 0x333333, 1 );
  scene.add( ambientLight );

  const frontLight = new THREE.DirectionalLight( 0xffffff, 2.5 );
  frontLight.position.set( 10, 10, 10 );

  const backLight = new THREE.DirectionalLight( 0xffffff, 1 );
  backLight.position.set( -10, 10, -10 );

  scene.add( frontLight, backLight );

  const ambientLightRT = ambientLight.clone();
  const frontLightRT = frontLight.clone();
  const backLightRT = backLight.clone();

  sceneRT.add( ambientLightRT, frontLightRT, backLightRT );

  return {
    ambientLight, frontLight, backLight, frontLightRT,
  };

}
