function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x40a22f );
  app.camera.position.set( 10, 10, 20 );

  app.controls.target.y = 5;

  // disable keys in the orbit controls so that we can use
  // them to control our horse
  app.controls.enableKeys = false;

  initLights( app.scene );

  loadModels( app.scene, app.loader );

  app.start();

}

init();
