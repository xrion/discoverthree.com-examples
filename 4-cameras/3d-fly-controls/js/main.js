
function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -0, 5, 30 );

  setupControls( app );

  // orbit and map controls do this for us,
  // for fly controls we need to target the camera manually
  // app.camera.lookAt( 0, 0, 0 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.plinth, meshes.shapes );

  loadModels( app.scene );

  app.start();
}

initScene();
