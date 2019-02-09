function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 15 );

  const shapes = initShapes();
  app.scene.add( shapes.lineSegments, shapes.line, shapes.lineLoop );

  app.start();

}

initScene();
