const app = new THREE_APP( '#container' );

function init() {

  app.init();

  app.camera.position.set( 15, 1, -5 );
  app.camera.far = 100;
  app.camera.updateProjectionMatrix();

  initLights();

  initSprites();

  app.start();

}

init();
