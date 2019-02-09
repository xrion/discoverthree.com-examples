function createLights( scene ) {

  const ambientLight = new THREE.HemisphereLight( 0xAE9A7F, 0x6D6E73, 1 );

  const frontLight = new THREE.PointLight( 0xFFFFFA, 1 );

  scene.add( ambientLight, frontLight );

  return { ambientLight, frontLight };

}
