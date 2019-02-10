async function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();


  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -50, 10, 50 );

  setupRenderer( app.renderer );

    const meshes = createMeshes();
  app.scene.add( meshes.meshA );
  const models = await loadModels();


  app.start();
}

initScene();
