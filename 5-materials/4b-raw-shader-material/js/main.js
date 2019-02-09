function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );


  const cube = createMeshes( app.scene );
  const rawShaderMaterial = createShaderMaterial( app.camera, cube );
  cube.material = rawShaderMaterial;


  app.start();

}

initScene();
