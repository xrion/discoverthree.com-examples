function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  // app.renderer.gammaInput = true;
  // app.renderer.gammaOutput = true;
  // app.renderer.toneMapping = THREE.ReinhardToneMapping;
  // app.renderer.toneMappingExposure = 3;

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 1.2, 1.4, 1 );

  // prevent the controls from zooming so far that the camera
  // is inside the model
  app.controls.minDistance = 2;

  const lights = initLights( app.scene );
  setupLightControls( lights );

  loadModels( app.scene );

  app.start();

}

init();
