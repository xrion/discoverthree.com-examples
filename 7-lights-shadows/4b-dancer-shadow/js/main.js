async function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.camera.position.set( 0, 2.5, 7 );

  app.controls.target.set( 0, 1.5, 0 );

  app.controls.minDistance = 5;
  app.controls.maxDistance = 15;

  setupRenderer( app.renderer );

  const lights = createLights();
  app.scene.add(
    lights.ambient,
    lights.main,
    lights.main.target,
    lights.top,
    lights.top.target,
    lights.diffuse,
    lights.diffuse.target,
  );

  const textures = initTextures();
  const materials = createMaterials( textures );
  const meshes = createMeshes( materials );

  app.scene.add( meshes.floor, meshes.backWall );

  const models = await loadModels( textures.envMap );
  app.scene.add( models.dancer );

  setupAnimation( models.dancer, lights );

  app.start();

}

initScene();
