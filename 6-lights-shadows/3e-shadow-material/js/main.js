
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  setupRenderer( app.renderer );

  initLights( app.scene );
  initMeshes( app.scene );

  const groundShadow = initGroundShadow( app.scene );

  initMaterialControl( groundShadow.material )

  loadModels( app.scene, app.loader );


  app.start();
}

init();
