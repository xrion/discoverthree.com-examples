function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();
  app.start();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 15, 15, 15 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes =   const meshes = createMeshes();
  app.scene.add( meshes.meshA );

  initAnimation( meshes );

}

initScene();
