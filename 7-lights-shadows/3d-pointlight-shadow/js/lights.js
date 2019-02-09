function createLights( scene ) {

  const ambientLight = new THREE.HemisphereLight( 0xcccccc, 0x555555, 1 );

  const mainLight = initShadowLight( scene );

  scene.add( ambientLight, mainLight );

  return { ambientLight, mainLight };

}


function initShadowLight( scene ) {

  const pointLight = new THREE.PointLight(
    0xffffff, // color
    1, // intensity
    20, // distance
    1 // decay
  );

  pointLight.position.set( 0, 12, 0 );

  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 1024;
  pointLight.shadow.mapSize.height = 1024;
  pointLight.shadow.camera.near = 0.1;
  pointLight.shadow.camera.far = 24;

  scene.add( new THREE.PointLightHelper( pointLight ) );
  scene.add( new THREE.CameraHelper( pointLight.shadow.camera ) );

  return pointLight;

}
