function initLights( scene ) {

  const ambientLight = new THREE.HemisphereLight( 0xcccccc, 0x555555, 1 );

  const mainLight = initSpotLight( scene );

  scene.add( ambientLight, mainLight );

  return { ambientLight, mainLight };

}


function initSpotLight( scene ) {

  const spotLight = new THREE.SpotLight(
    0xffffff, // color

    // intensity - leave it at 1 since we'll overwrite it with light.power below
    1,

    // distance: always 0 (meaning infinite) for physically correct lights
    0,

    // width of the spotlight beam in Radian. Max 180 degres (Math.PI)
    Math.PI / 6,

    // how sharp the edges of the spotlight are
    0.5, // exponent/penumbra

    // decay - how fast the light fades along the beam
    // always 2 for physically correct lights
    2,
  );

  // power is in lumens - 1700 is roughly a 100w bulb
  spotLight.power = 1700;

  spotLight.position.set( -12, 10, -12 );

  scene.add( new THREE.SpotLightHelper( spotLight ) );

  return spotLight;

}
