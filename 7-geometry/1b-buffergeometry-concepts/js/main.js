
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 10, 5, 15 );

  initMeshes( app.scene );
  loadModels( app.scene );

  app.start();

}

init();
