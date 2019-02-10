function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.renderer.toneMappingExposure = 0.5;

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 3, 2, 15 );

  app.start();


  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.shapes );

  initAnimation( meshes.shapes );


}

initScene();
