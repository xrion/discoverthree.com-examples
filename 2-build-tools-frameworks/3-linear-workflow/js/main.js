function initScene() {

  const app = new THREE_APP( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 1; // default is 1

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -2.5, 2.5, 6.5 );

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  loadModels( app.scene );

}

initScene();
