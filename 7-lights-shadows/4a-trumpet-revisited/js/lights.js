function createLights( scene ) {

  const ambientLight = new THREE.HemisphereLight(

    0xAE9A7F,
    0x6D6E73,

    // full moon
    // 0.3,

    // twilight
    3,

    // very dark overcast sky
    // 100,

    // sunset/rise, clear sky
    // 400,

    // overcast day
    // 1000,

    // normal daylight
    // 10000,

    // direct sun
    // 50000,

  );

  const mainLight = new THREE.DirectionalLight(
    0xFFFFFA,
    3,
  );

  // mainLight.power = 5000;

  mainLight.position.set( -4, 3, 4 );

  mainLight.castShadow = true;
  mainLight.shadow.mapSize.width = 1024;
  mainLight.shadow.mapSize.height = 1024;
  mainLight.shadow.camera.near = 5.5;
  mainLight.shadow.camera.far = 7.5;

  mainLight.shadow.camera.top = 1;
  mainLight.shadow.camera.right = 1;
  mainLight.shadow.camera.bottom = -1;
  mainLight.shadow.camera.left = -1;

  // scene.add( new THREE.CameraHelper( mainLight.shadow.camera ) );

  scene.add( ambientLight, mainLight );

  return { ambientLight, mainLight };

}
