function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.renderer.toneMappingExposure = 1;

  app.camera.position.set( 0, 0, 5 );

  app.start();

  const meshes = createMeshes();
  app.scene.add( meshes.spiral );

}

initScene();
