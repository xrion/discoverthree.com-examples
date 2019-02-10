function createAmbientLight() {

  return new THREE.HemisphereLight(

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

}

function createMainLight() {

  const main = new THREE.DirectionalLight(
    0xFFFFFA,
    15,
  );

  main.position.set( -4, 3, 4 );

  main.castShadow = true;
  main.shadow.mapSize.width = 1024;
  main.shadow.mapSize.height = 1024;
  main.shadow.camera.near = 5.5;
  main.shadow.camera.far = 7.5;

  main.shadow.camera.top = 1;
  main.shadow.camera.right = 1;
  main.shadow.camera.bottom = -1;
  main.shadow.camera.left = -1;

  return main;

}

function createLights() {

  const ambient = createAmbientLight();

  const main = createMainLight();

  return { ambient, main };

}
