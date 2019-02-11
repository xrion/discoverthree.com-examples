async function initScene() {

  const app = new THREE_APP( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 0.5;

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -2.5, 2.5, 6 );

  app.controls.target.y = 1;

  app.controls.autoRotate = true;
  app.controls.autoRotateSpeed = -0.2;

  // we'll start the app first, then add things to our scene
  // this means that the blue background will show immediately,
  // otherwise we will stare at a black screen while things are loading
  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const models = await loadModels();
  app.scene.add( models.rhino );

}

initScene();
