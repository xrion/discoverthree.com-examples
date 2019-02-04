function initLights( scene ) {

  const ambientLight = new THREE.HemisphereLight( 0xaaaaaa, 0x555555, 0.75 );

  const mainLight = initShadowLight( scene );

  scene.add( ambientLight, mainLight );

  return { ambientLight, mainLight };

}


function initShadowLight( scene ) {

  const directionalLight = new THREE.DirectionalLight(
    0xffffff, // color
    0.5, // intensity,
  );

  directionalLight.position.set( -12, 10, -12 );

  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 8;
  directionalLight.shadow.camera.far = 35;

  directionalLight.shadow.camera.top = 10;
  directionalLight.shadow.camera.right = 18;
  directionalLight.shadow.camera.bottom = -8;
  directionalLight.shadow.camera.left = -18;

  // directionalLight.shadow.radius = 1.5;

  scene.add( new THREE.DirectionalLightHelper( directionalLight ) );
  scene.add( new THREE.CameraHelper( directionalLight.shadow.camera ) );

  return directionalLight;

}
