async function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x222222 );
  app.camera.position.set( 7, 3, 7 );

  app.controls.target.x = 0.5;

  const text = await loadFont();
  app.scene.add( text.discover );

  app.start();

}

initScene();
