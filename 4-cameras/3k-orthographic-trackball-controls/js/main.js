
function initScene() {

  const app = new THREE_APP( '#container' );

  // remember to setup the camera before calling app.init
  initCamera( app );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 20, 10, 40 );

  setupControls( app );

  app.onResize = () => {

    app.controls.handleResize();

  };

  createLights( app.scene );
  createMeshes( app.scene );
  loadModels( app.scene );


  app.start();

}

initScene();
