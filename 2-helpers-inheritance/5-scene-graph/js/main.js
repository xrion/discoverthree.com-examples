const app = new THREE_APP( '#container' );

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -1, 1, 4 );

  initLights();
  initMeshes();

  // loadModels();

  app.start();

}

init();
