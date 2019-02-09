function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x23485c );

  app.controls.target.y = 1;

  createLights( app.scene );
  createMeshes( app.scene );

  initCamera( app.camera );

  app.start();

}

initScene();
