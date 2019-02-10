async function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.camera.position.set( 2, 1, 1.5 );

  setupRenderer( app.renderer );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const envMap = loadEnvironments();
  app.scene.background = envMap;
  const materials = initMaterials( app.scene, envMap );

  const meshes = createMeshes( materials );
  app.scene.add( meshes.plinth );

  const models = await loadModels( materials );
  app.scene.add( models.trumpet );

  app.start();

}

initScene();
