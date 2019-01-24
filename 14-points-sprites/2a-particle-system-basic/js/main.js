function init() {

  const app = new THREE_APP( '#container' );


  app.scene.background = new THREE.Color( 0x34456f );

  app.init();

  app.camera.position.set( 0, 0, 10 );

  initPoints( app.scene );

  app.start();

}

init();
