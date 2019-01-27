
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  initLights( app.scene );

  loadModels( app.scene, app.loader );

  const meshes = initMeshes( app.scene );

  setupControls( [meshes.shapes, meshes.shapes.children[ 0 ]], app );

  app.start();

}

init();
