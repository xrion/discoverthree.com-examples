
function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 10, 10, 15 );

  createLights( app.scene );

  const mesh = createMeshes( app.scene );

  app.start();

}

initScene();
