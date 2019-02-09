function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();
  app.start();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -1, 1, 4 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.meshA );

}

initScene();
