
function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.scene.fog = new THREE.Fog( 0x8FBCD4, 200, 230 );
  app.camera.position.set( -20, 10, 30 );

  setupRenderer( app.renderer );
  createLights( app.scene );
  createMeshes( app.scene );
  loadModels( app.scene );


  app.start();
}

initScene();
