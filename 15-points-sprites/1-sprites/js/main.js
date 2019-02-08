function init() {

  const app = new THREE_APP( '#container' );

  const cubeTextureLoader = new THREE.CubeTextureLoader();

  const path = 'textures/environments/cubemap/castle/';

  const urls = [
    `${path}/px.jpg`, `${path}/nx.jpg`,
    `${path}/py.jpg`, `${path}/ny.jpg`,
    `${path}/pz.jpg`, `${path}/nz.jpg`,
  ];

  const cubemap = cubeTextureLoader.load( urls );
  cubemap.mapping = THREE.CubeReflectionMapping;
  cubemap.encoding = THREE.sRGBEncoding;

  app.scene.background = cubemap;

  app.init();

  app.camera.position.set( -20, 0, -20 );
  // app.camera.far = 100;
  // app.camera.updateProjectionMatrix();

  initLights( app.scene );

  initSprites( app.scene );

  app.start();

}

init();
