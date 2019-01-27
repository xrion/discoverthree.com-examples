
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  setupControls( app );

  // orbit and map controls do this for us,
  // for fly controls we need to target the camera manually
  app.camera.lookAt( 0, 0, 0 );

  initLights( app.scene );
  initMeshes( app.scene );
  loadModels( app.scene, app.loader );

  app.start();
}

init();
