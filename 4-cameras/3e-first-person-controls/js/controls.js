function setupControls( app ) {

  app.controls = new THREE.FirstPersonControls( app.camera, app.container );

  initOverlay( app.controls );

  // there are a couple of things we need to set up for these controls

  // next, they have a function to automatically deal with resized
  // screens. We just need to make sure it gets called correctly

  app.onResize = () => {

    app.controls.handleResize();

  };

  app.controls.movementSpeed = 10;
  app.controls.lookSpeed = 0.075;

  app.controls.lookVertical = false;

  // The rest of the parameters are included here for reference,
  // but not actually changed

  // app.controls.autoForward = false;

  // app.controls.activeLook = true;

  // app.controls.heightSpeed = false;
  // app.controls.heightCoef = 1.0;
  // app.controls.heightMin = 0.0;
  // app.controls.heightMax = 1.0;

  // app.controls.autoSpeedFactor = 0.0;

  // app.controls.constrainVertical = false;
  // app.controls.verticalMin = 0;
  // app.controls.verticalMax = Math.PI;

  // app.controls.lat = 0;
  // app.controls.lon = 0;

  // These are set by the controls automatically, don't change them

  // app.controls.mouseX = 0;
  // app.controls.mouseY = 0;

  // app.controls.moveForward = false;
  // app.controls.moveBackward = false;
  // app.controls.moveLeft = false;
  // app.controls.moveRight = false;
  // app.controls.mouseDragOn = false;

  // app.controls.viewHalfX = 0;
  // app.controls.viewHalfY = 0;


  // Fly controls has lots of public methods, however there are only two that
  // you're supposed to use:

  // This is already being called once per frame in our app
  // Unlike the update function in OrbitControl,
  // it IS required to call this once per frame
  // note that the delta value (times passed since last frame)
  // also needs to be passed in
  // app.controls.update( delta );

  // If we want to stop using controls, we need to call this function.
  // It removes all the eventListeners that that controls set up
  // app.controls.dispose();
}

function initOverlay( controls ) {

  controls.enabled = false;

  const overlay = document.querySelector( '#overlay' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';
    controls.enabled = true;

  } );

}
