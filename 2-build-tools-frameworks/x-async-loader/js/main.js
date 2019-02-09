function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.renderer.physicallyCorrectLights = true;

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -2.5, 2.5, 7.5 );

  const lights = initLights( app.scene );
  app.scene.add( lights.ambient, lights.main );

  loadModels( app.scene );

  app.start();

}

init();
