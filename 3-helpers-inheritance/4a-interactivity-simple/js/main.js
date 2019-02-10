function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );

  app.camera.position.set( 5, 5, 20 );

  // disable keys in the orbit controls so that we can use
  // them to control our horse
  app.controls.enableKeys = false;

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.box );

  const helpers = createArrowHelper();

  meshes.box.add( helpers.arrowHelper );

  initControls( meshes.box );

  app.start();

}

initScene();
