
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  setupControls( app );

  initLights( app.scene );
  initMeshes( app.scene );

  // don't call app.start()
  // we're not using a render loop here,
  // instead rendering one frame each time the controls
  // move the camera
  // app.start();

  // however, we do want to render one frame
  // tp prevent showing a black screen at the starts
  app.render();

}

init();
