
function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 25 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.box );

  loadModels( app.scene );

  addArrowHelpers( app.scene );
  addAxesHelper( app.scene );
  addBox3Helper( app.scene );
  addGridHelper( app.scene );
  addPolarGridHelper( app.scene );
  addPlaneHelpers( app.scene );

  app.start();

}

initScene();
