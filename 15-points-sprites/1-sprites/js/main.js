function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.renderer.toneMappingExposure = 0.15;

  const environments = loadEnvironments();
  app.scene.background = environments.castle;

  app.camera.position.set( -20, 0, -20 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const sprites = initSprites();
  app.scene.add( sprites.leaves );

  app.start();

}

initScene();
