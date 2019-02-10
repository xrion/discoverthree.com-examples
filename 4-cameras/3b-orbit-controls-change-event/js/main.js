
function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.renderer.toneMappingExposure = 0.4;

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  setupControls( app );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.plinth, meshes.shapes );

  // don't call app.start()
  // we're not using a render loop here,
  // instead rendering one frame each time the controls
  // move the camera
  // app.start();

  // however, we do want to render one frame
  // tp prevent showing a black screen at the starts
  app.render();

}

initScene();
