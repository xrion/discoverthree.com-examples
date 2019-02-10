async function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.camera.position.set( 0, 0, 20 );


  const meshes = createMeshes();
  app.scene.add( meshes.moon );
  app.controls.target.copy( meshes.moon.position );

  const models = await loadModels();
  app.scene.add( models.parrot );

  app.start();

}

initScene();
