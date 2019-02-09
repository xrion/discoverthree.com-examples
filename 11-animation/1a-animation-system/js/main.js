function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 15, 15, 15 );

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.box );

  initAnimation( meshes.box );

}

initScene();
