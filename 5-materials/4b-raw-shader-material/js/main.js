function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );


  const meshes = createMeshes();
  app.scene.add( meshes.box );

  const rawShaderMaterial = createShaderMaterial( app.camera, meshes.box );
  meshes.box.material = rawShaderMaterial;


  app.start();

}

initScene();
