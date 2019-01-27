function setupControls( app ) {

  // setup the map controls. Our App will have skipped
  // setting up OrbitControls since we didn't load the script,
  // allowing us to set up a different controls manually
  app.controls = new THREE.MapControls( app.camera, app.container );

  initOverlay( app.controls );

}

function initOverlay( controls ) {

  controls.enabled = false;

  const overlay = document.querySelector( '#controls' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';
    controls.enabled = true;

  } );

}
