
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.camera.position.set( 0, 2.5, 13 );

  app.controls.target.set( 0, 1.5, 0 )

  setupRenderer( app.renderer );

  const lights = initLights( app.scene );

  const textures = initTextures();
  initMeshes( app.scene, textures );

  console.log(textures);

  loadModels( app.scene, app.loader, lights, textures );


  app.start();
}

init();
