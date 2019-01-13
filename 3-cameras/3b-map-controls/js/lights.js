function initLights( scene ) {

  const ambientLight = new THREE.HemisphereLight( 0xffffff, 0x555555, 1 );

  const mainLight =  new THREE.SpotLight(
    0xffffff, // color
    1, // intensity,
    35, //distance
    Math.PI / 6,
    0.9, // exponent,
    0.5, //decay
    );

  mainLight.position.set( -12, 10, -12 );

  scene.add( ambientLight, mainLight );

  return { ambientLight, mainLight };

}