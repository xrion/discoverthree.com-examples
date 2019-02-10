
function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.renderer.toneMappingExposure = 1; // default is 1

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.scene.fog = new THREE.Fog( 0x8FBCD4, 200, 230 );
  app.camera.position.set( -20, 30, 50 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const lightHelper = new THREE.SpotLightHelper( lights.main );
  app.scene.add( lightHelper );

  const meshes = createMeshes();
  app.scene.add( meshes.plinth, meshes.ground, meshes.targets.middle, meshes.targets.front, meshes.targets.rear );

  setupLightTargetControls( lights, lightHelper, meshes.targets );

  app.start();

}

initScene();
