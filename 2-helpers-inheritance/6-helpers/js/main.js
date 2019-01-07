const app = new THREE_APP( '#container' );

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 25 );

  initLights();
  initMeshes();
  loadModels();

  addArrowHelpers();
  addAxesHelper();
  addBox3Helper();
  addGridHelper();
  addPolarGridHelper();
  addPlaneHelpers();

  app.start();

}

init();
