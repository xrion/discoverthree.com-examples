function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -2.5, 2.5, 6 );

  const shapes = initShapes();
  app.scene.add( shapes.dashedSquare );

  app.start();

}

initScene();
