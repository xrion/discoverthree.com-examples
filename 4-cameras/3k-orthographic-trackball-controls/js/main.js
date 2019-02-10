async function initScene() {

  const app = new THREE_APP( '#container' );

  // remember to setup the camera before calling app.init
  initCamera( app );

  app.init();

  app.renderer.toneMappingExposure = 0.4;

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 20, 10, 40 );

  setupControls( app );

  app.onResize = () => {

    app.controls.handleResize();

  };

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.plinth, meshes.shapes );

  const models = await loadModels();
  app.scene.add( ...models.horsesArray );

  app.start();

}

initScene();
