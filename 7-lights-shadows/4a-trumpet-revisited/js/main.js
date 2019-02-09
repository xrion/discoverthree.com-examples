function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  setupRenderer( app.renderer );

  app.camera.position.set( 2, 1, 1.5 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const envMap = loadEnvironments();
  const materials = initMaterials( app.scene, envMap );

  app.scene.background = envMap;

  const meshes = createMeshes();
  app.scene.add( meshes.plinth );

  loadModels( app.scene, materials );


  app.start();

}

initScene();
