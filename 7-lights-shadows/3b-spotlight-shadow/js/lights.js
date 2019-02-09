function createLights( scene ) {

  const ambientLight = new THREE.HemisphereLight( 0xcccccc, 0x555555, 1 );

  const mainLight = initShadowLight( scene );

  scene.add( ambientLight, mainLight );

  return { ambientLight, mainLight };

}


function initShadowLight( scene ) {

  const spotLight = new THREE.SpotLight(
    0xffffff, // color
    1, // intensity,
    0, // distance: always 0 for physically correct lights
    Math.PI / 6,
    0.25, // exponent,
    2, // decay: always 2 for physically correct lights
  );

  spotLight.power = 1700;

  spotLight.position.set( -12, 10, -12 );

  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.mapSize.height = 1024;
  spotLight.shadow.camera.near = 10;
  spotLight.shadow.camera.far = 35;

  spotLight.shadow.camera.updateProjectionMatrix();

  scene.add( new THREE.SpotLightHelper( spotLight ) );
  scene.add( new THREE.CameraHelper( spotLight.shadow.camera ) );

  return spotLight;

}
