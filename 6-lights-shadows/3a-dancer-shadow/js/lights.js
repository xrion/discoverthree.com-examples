function initLights( scene ) {

  const mainLight = new THREE.SpotLight(
    0xcccccc,
    0.25,
    50, // distance
    Math.PI / 8, // angle
    0.5, // penumbra
    0.5, // decay
  );
  mainLight.position.set( 2, 4, 6 );
  mainLight.castShadow = true;
  mainLight.shadow.mapSize.width = 1024;
  mainLight.shadow.mapSize.height = 1024;
  mainLight.shadow.camera.near = 3;
  mainLight.shadow.camera.far = 8;
  // mainLight.shadow.radius = 1.5;
  mainLight.shadow.bias = -0.0001;

  const diffuseLight = new THREE.SpotLight(
    0x444444,
    0.2,
    30, // distance
    Math.PI / 5, // angle
    0.5, // penumbra
    1, // decay
  );
  diffuseLight.position.set( -3, 1, 4 );
  diffuseLight.castShadow = true;
  diffuseLight.shadow.mapSize.width = 1024;
  diffuseLight.shadow.mapSize.height = 1024;
  diffuseLight.shadow.camera.near = 2;
  diffuseLight.shadow.camera.far = 8;
  // diffuseLight.shadow.radius = 1.5;
  diffuseLight.shadow.bias = -0.0001;

  const topLight = new THREE.SpotLight(
    0xffffff,
    0.1,
    20, // distance
    Math.PI / 6, // angle
    0.5, // penumbra
    1, // decay
  );
  topLight.position.set( 2, 7, -1 );
  topLight.castShadow = true;
  topLight.shadow.mapSize.width = 1024;
  topLight.shadow.mapSize.height = 1024;
  topLight.shadow.camera.near = 4;
  topLight.shadow.camera.far = 8;
  // topLight.shadow.radius = 3;
  topLight.shadow.bias = -0.0001;

  scene.add( mainLight, mainLight.target,
    diffuseLight, diffuseLight.target,
    topLight, topLight.target );


  return { mainLight, diffuseLight, topLight };

}
