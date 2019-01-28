function setupControls( app ) {

  // call control.update()
  // to move the camera into the correct position
  // we could also use camera.lookat( 0, 0, 0 )
  app.controls.update();

  initOverlay( app.controls );

  app.controls.addEventListener( 'change', ( e ) => {

    app.update();
    app.render();

  } );

}

function initOverlay( controls ) {

  // controls.enabled = false;

  const overlay = document.querySelector( '#overlay' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';
    // controls.enabled = true;

  } );

}
