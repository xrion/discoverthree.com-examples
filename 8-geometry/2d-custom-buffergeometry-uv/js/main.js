
function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  // app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 10 );

  createMeshes( app.scene );

  app.start();

}

initScene();
