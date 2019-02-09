
function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  createLights( app.scene );

  loadModels( app.scene );

  const meshes = createMeshes( app.scene );

  setupControls( meshes.shapes, app );

  app.start();

}

initScene();
