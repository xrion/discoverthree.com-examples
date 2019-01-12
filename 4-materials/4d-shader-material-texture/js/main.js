const app = new THREE_APP( '#container' );

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

  const shaderMaterial = createShaderMaterial();
  const cube = initMeshes( shaderMaterial );

  app.scene.add( cube );

  app.start();

}

init();
