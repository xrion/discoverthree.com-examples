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
  app.controls.domElement = app.container;
  app.controls.rollSpeed = Math.PI / 24;
  app.controls.autoForward = false;
  app.controls.dragToLook = false;

}

function initOverlay( app ) {

  const overlay = document.querySelector( '#controls' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';

    initControls( app );

  } );

}
