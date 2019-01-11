const app = new THREE_APP( '#container' );

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

  // initLights();

  const cube = initMeshes();
  const rawShaderMaterial = createShaderMaterial();
  cube.material = rawShaderMaterial;

  cube.userData.onUpdate = ( delta ) => {

    rawShaderMaterial.uniforms.time.value += delta;

  }

  // loadModels();

  app.start();

}

init();
