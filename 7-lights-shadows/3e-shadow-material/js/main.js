
function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  setupRenderer( app.renderer );

  createLights( app.scene );
  createMeshes( app.scene );

  const groundShadow = initGroundShadow( app.scene );

  initMaterialControl( groundShadow.material )

  loadModels( app.scene );


  app.start();
}

initScene();
