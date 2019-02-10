function createDiffuseLight() {

  const diffuse = new THREE.SpotLight(
    0x444444,
    30,
    0, // distance
    Math.PI / 5, // angle
    0.5, // penumbra
    2, // decay
  );
  diffuse.position.set( -3, 1, 4 );
  diffuse.castShadow = true;
  diffuse.shadow.mapSize.width = 1024;
  diffuse.shadow.mapSize.height = 1024;
  diffuse.shadow.camera.near = 2;
  diffuse.shadow.camera.far = 8;
  // diffuse.shadow.radius = 1.5;
  diffuse.shadow.bias = -0.0001;

  return diffuse;

}

function createTopLight() {

  const top = new THREE.SpotLight(
    0xffffff,
    25,
    0, // distance
    Math.PI / 6, // angle
    0.5, // penumbra
    2, // decay
  );

  top.position.set( 2, 7, -1 );
  top.castShadow = true;
  top.shadow.mapSize.width = 1024;
  top.shadow.mapSize.height = 1024;
  top.shadow.camera.near = 4;
  top.shadow.camera.far = 8;
  // top.shadow.radius = 3;
  top.shadow.bias = -0.0001;

  return top;

}

function createMainLight() {

  const main = new THREE.SpotLight(
    0xffffff,
    1, // calculated using light.power below
    0, // distance
    Math.PI / 8, // angle
    0.5, // penumbra
    2, // decay
  );

  main.power = 1700;

  main.position.set( 2, 4, 6 );
  main.castShadow = true;
  main.shadow.mapSize.width = 1024;
  main.shadow.mapSize.height = 1024;
  main.shadow.camera.near = 3;
  main.shadow.camera.far = 20;
  // main.shadow.radius = 1.5;
  main.shadow.bias = -0.0001;

  return main;

}

function createLights() {

  return {
    ambient: new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 1 ),
    main: createMainLight(),
    diffuse: createDiffuseLight(),
    top: createTopLight(),
  };

}
