function initLights( scene ) {

  const ambientLight = new THREE.HemisphereLight( 0xcccccc, 0x555555, 1 );

  const mainLight = initShadowLight( scene );

  scene.add( ambientLight, mainLight );

  return { ambientLight, mainLight };

}


function initShadowLight( scene ) {

  const spotLight = new THREE.SpotLight(
    0xffffff, // color
    1, // intensity,
    35, // distance
    Math.PI / 6,
    0.25, // exponent,
    1, // decay
  );

  spotLight.position.set( -12, 10, -12 );

  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 1024; // default
  spotLight.shadow.mapSize.height = 1024; // default
  spotLight.shadow.camera.near = 10;
  spotLight.shadow.camera.far = 15;

  spotLight.shadow.camera.updateProjectionMatrix();

  scene.add( new THREE.SpotLightHelper( spotLight ) );
  scene.add( new THREE.CameraHelper( spotLight.shadow.camera ) );

  return spotLight;

}
