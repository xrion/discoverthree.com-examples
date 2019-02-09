function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

  const plane = createMeshes( app.scene );
  const rawShaderMaterial = createShaderMaterial();
  plane.material = rawShaderMaterial;

  plane.userData.onUpdate = ( delta ) => {

    rawShaderMaterial.uniforms.time.value += delta;

  };

  app.start();

}

initScene();
