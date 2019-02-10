function createLights() {

  const ambient = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );

  const main = new THREE.DirectionalLight( 0xfffffc, 15 );
  main.position.set( 0, 1, 10 );

  return { ambient, main };

}
