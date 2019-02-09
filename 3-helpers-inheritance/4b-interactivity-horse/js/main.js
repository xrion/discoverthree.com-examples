function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x00BFFF );

  // adding fog in the distance, the same color as the sky is
  // a cheap way to blur the boundary between ground and sky
  app.scene.fog = new THREE.Fog( 0x00BFFF, 115, 150 );


  app.camera.position.set( 10, 10, 20 );

  app.controls.target.y = 5;

  // disable keys in the orbit controls so that we can use
  // them to control our horse
  app.controls.enableKeys = false;

  createLights( app.scene );

  initGround( app.scene );

  loadModels( app.scene );

  app.start();

}

initScene();
