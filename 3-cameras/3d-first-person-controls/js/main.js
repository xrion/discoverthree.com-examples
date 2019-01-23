
function init() {

  const app = new THREE_APP( '#container' );

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 2, 0 );

  // orbit and map controls do this for us
  app.camera.lookAt( 0, 0, 0 );

  app.controls = new THREE.FirstPersonControls( app.camera, app.container );
  console.log(app.controls);
  app.controls.target.set( 0, 0, 0 );
  app.controls.movementSpeed = 10;
  app.controls.lookSpeed = 0.075;


  app.controls.lookVertical = true;
  app.controls.constrainVertical = true;
  app.controls.verticalMin = Math.PI * 0.35;
	app.controls.verticalMax = Math.PI * 0.65;

  app.onResize = () => {

    app.controls.handleResize();

  };

  initLights( app.scene );
  initMeshes( app.scene );
  loadModels( app.scene, app.loader );


  app.start();
}

init();
