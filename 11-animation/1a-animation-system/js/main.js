function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 15, 15, 15 );

  initLights( app.scene );

  const cube = initMeshes( app.scene );

  initAnimation( cube );

  app.start();

}

init();
