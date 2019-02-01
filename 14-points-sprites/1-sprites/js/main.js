function init() {

  const app = new THREE_APP( '#container' );

  const cubeTextureLoader = new THREE.CubeTextureLoader();

  const urls = [
    'textures/cubemap/px.jpg', 'textures/cubemap/nx.jpg',
    'textures/cubemap/py.jpg', 'textures/cubemap/ny.jpg',
    'textures/cubemap/pz.jpg', 'textures/cubemap/nz.jpg'
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
