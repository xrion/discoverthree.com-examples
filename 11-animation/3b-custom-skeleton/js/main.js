
function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 10, 10, 15 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const mesh =   const meshes = createMeshes();
  app.scene.add( meshes.meshA );

  app.start();

}

initScene();
