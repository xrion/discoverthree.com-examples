function setupControls( app ) {

  // Fly controls don't have an "enabled"
  // flag for some reason, so we'll set up the
  // controls after the user clicks on the overlay
  initOverlay( app );

}

function initControls( app ) {

  // setup the fly controls. Our App skipped
  // setting up OrbitControls since we didn't load the script,
  // allowing us to set up a different controls manually
  app.controls = new THREE.FlyControls( app.camera );

  app.controls.movementSpeed = 10;

  // app.controls.domElement = app.container;

  app.controls.rollSpeed = Math.PI / 24; // in radians

  app.controls.autoForward = false;

  // if true, mouse drag to look around
  // if false, mouse move to look around
  // and left/right buttons to move forward/back
  app.controls.dragToLook = false;

  // Fly controls has lots of public methods, however there are only two that
  // you're supposed to use:

  // This is already being called once per frame in our app
  // Unlike the update function in OrbitControl,
  // it IS required to call this once per frame
  // note that the delta value (times passed since last frame)
  // also needs to be passed in
  // app.controls.update( delta);

  // If we want to stop using controls, we need to call this function.
  // It removes all the eventListeners that that controls set up
  // app.controls.dispose();


}

function initOverlay( app ) {

  const overlay = document.querySelector( '#overlay' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';

    initControls( app );

  } );

}
