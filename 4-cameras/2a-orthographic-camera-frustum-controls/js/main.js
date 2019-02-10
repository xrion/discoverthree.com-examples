function initScene() {

  const app = new THREE_APP( '#container' );

  // remember to setup the camera before calling app.init
  initCamera( app );

  app.init();

  app.renderer.toneMappingExposure = 0.5;

  initCameraControls( app.camera, app.controls );

  app.scene.background = new THREE.Color( 0x23485c );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( ...meshes.spheresArray );

  app.start();

}

initScene();
