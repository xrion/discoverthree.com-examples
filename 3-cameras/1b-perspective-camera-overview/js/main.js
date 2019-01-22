function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );

  app.controls.target.y = 1;

  initLights( app.scene );
  initMeshes( app.scene );

  initCamera( app );

  app.start();

}

init();
