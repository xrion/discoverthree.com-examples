const app = new THREE_APP( '#container' );

function initScene() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

  const shaderMaterial = createShaderMaterial();

  const meshes = createMeshes( shaderMaterial );
  app.scene.add( meshes.box );

  app.start();

}

initScene();
