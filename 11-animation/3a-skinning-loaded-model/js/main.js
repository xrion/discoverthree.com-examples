async function initScene() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 2, 2, 2 );

  app.controls.target.y = 0.75;

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const models = await loadModels();
  app.scene.add( models.cesiumMan );

  app.scene.add( new THREE.SkeletonHelper( models.cesiumMan ) );

  wireframeControl( [ models.cesiumMan.children[ 1 ].material ] );

  app.start();

}

initScene();
