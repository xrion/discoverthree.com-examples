function createLights( scene ) {

  const ambientLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 0.1 );

  const mainLight = new THREE.SpotLight( 0xfffffc, 2, 0, Math.PI / 12, 0.5,  1 );

  mainLight.position.set( -12, 10, -12 );

  const mainLightHelper = new THREE.SpotLightHelper( mainLight );
  scene.add( mainLightHelper );

  scene.add( ambientLight, mainLight );

  return { ambientLight, mainLight, mainLightHelper };

}
