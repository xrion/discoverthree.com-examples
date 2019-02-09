async function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -2.5, 2.5, 6 );

  app.controls.target.y = 1;

  app.controls.autoRotate = true;
  app.controls.autoRotateSpeed = -0.2;

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const models = await loadModels();
  app.scene.add( models.rhino );

  app.start();

}

initScene();
