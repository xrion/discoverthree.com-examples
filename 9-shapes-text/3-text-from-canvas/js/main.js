function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.renderer.toneMappingExposure = 0.4;

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const texture = initCanvasTexture();

  const meshes = createMeshes( texture );
  app.scene.add( meshes.box, meshes.sphere );

  app.start();

}

initScene();
