function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 2, 1, 2 );

  // prevent the controls from zooming so far that the camera
  // is inside the model
  app.controls.minDistance = 2;

  const lights = initLights( app.scene );
  setupLightControls( lights );

  loadModels( app.scene, app.loader );

  app.start();

}

init();
