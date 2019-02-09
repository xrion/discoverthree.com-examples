function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.camera.position.set( 2, 1, 1.5 );

  // prevent the controls from zooming so far that the camera
  // is inside the model
  app.controls.minDistance = 1.75;

  createLights( app.scene );

  const envMap = loadEnvironments();
  const materials = initMaterials( app.scene, envMap );

  app.scene.background = envMap;

  createMeshes( app.scene, materials );
  loadModels( app.scene, materials );

  initEnvMapControls( materials, envMap );

  app.start();

}

initScene();
