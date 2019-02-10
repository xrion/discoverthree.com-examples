async function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.renderer.toneMappingExposure = 0.4;

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.scene.fog = new THREE.Fog( 0x8FBCD4, 200, 230 );
  app.camera.position.set( -20, 10, 30 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  app.scene.add( new THREE.DirectionalLightHelper( lights.main ) );

  const meshes = createMeshes();
  app.scene.add( meshes.plinth, meshes.shapes );

  const models = await loadModels();
  app.scene.add( ...models.horsesArray );

  app.start();
}

initScene();
