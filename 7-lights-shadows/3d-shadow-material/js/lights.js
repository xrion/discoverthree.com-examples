function createLights() {

  const ambient = new THREE.HemisphereLight( 0xcccccc, 0x555555, 0.75 );

  const main = createMainLight();

  return { ambient, main };

}

function createMainLight() {

  const directionalLight = new THREE.DirectionalLight(
    0xffffff, // color
    15, // intensity,
  );

  directionalLight.position.set( -12, 10, 12 );

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

  return directionalLight;

}
