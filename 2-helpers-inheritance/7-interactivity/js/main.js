const app = new THREE_APP( '#container' );

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x40a22f );
  app.camera.position.set( 10, 30, 20 );

  // disable keys in the orbit controls so that we can use
  // them to control our horse
  app.controls.enableKeys = false;

  initLights();
  // initMeshes();
  loadModels();

  app.start();

}

init();
