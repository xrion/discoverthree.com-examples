
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.camera.position.set( 0, 0, 10 );

  initLights( app.scene );

  const mesh = initMeshes( app.scene );

  morphControl( mesh );

  app.start();

}

init();
