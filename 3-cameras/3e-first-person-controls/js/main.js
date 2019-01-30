
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 4, 40 );

  app.camera.lookAt( 0, 3, 0 );

  setupControls( app );

  initLights( app.scene );
  initMeshes( app.scene );
  loadModels( app.scene );


  app.start();
}

init();
