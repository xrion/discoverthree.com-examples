function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  setupRenderer( app.renderer );

  app.camera.position.set( 2, 1, 1.5 );

  initLights( app.scene );

  const envMap = loadEnvironments();
  const materials = initMaterials( app.scene, envMap );

  app.scene.background = envMap;

  initMeshes( app.scene, materials );
  loadModels( app.scene, materials );


  app.start();

}

init();
