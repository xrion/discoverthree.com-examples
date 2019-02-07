
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 2, 20 );

  setupControls( app );

  initLights( app.scene );
  initMeshes( app.scene );
  loadModels( app.scene );


  app.start();
}

init();
