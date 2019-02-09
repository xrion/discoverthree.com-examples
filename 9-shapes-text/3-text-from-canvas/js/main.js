function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

   createLights( app.scene );

  const texture = initCanvasTexture();

  createMeshes( app.scene, texture );

  app.start();

}

initScene();
