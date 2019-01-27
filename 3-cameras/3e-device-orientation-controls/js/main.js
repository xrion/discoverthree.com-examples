
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 2, 0 );

  setupControls( app );

  // orbit and map controls do this for us
  app.camera.lookAt( 0, 0, 0 );

  app.onResize = () => {

    app.controls.handleResize();

  };

  initLights( app.scene );
  initMeshes( app.scene );
  loadModels( app.scene, app.loader );


  app.start();
}

init();
