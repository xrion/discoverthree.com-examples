
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  // orbit and map controls do this for us
  app.camera.lookAt( 0, 0, 0 );

  // app.controls = new THREE.FirstPersonControls( app.camera, app.container );
  app.controls = new THREE.FirstPersonControls( app.camera, app.container );
  console.log(app.controls);
  app.controls.movementSpeed = 70;
  app.controls.lookSpeed = 0.05;
  app.controls.noFly = true;
  app.controls.lookVertical = false;

  setupRenderer( app.renderer );
  initLights( app.scene );
  initMeshes( app.scene );
  loadModels( app.scene, app.loader );


  app.start();
}

init();
