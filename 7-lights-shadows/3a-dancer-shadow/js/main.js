
function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.camera.position.set( 0, 2.5, 7 );

  app.controls.target.set( 0, 1.5, 0 );

  app.controls.minDistance = 5;
	app.controls.maxDistance = 15;

  setupRenderer( app.renderer );

  const lights = createLights( app.scene );

  const textures = initTextures();
  createMeshes( app.scene, textures );

  loadModels( app.scene, lights, textures );

  app.start();
}

initScene();
