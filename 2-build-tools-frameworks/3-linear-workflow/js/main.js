function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -2.5, 2.5, 6.5 );

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  loadModels( app.scene );

}

initScene();
