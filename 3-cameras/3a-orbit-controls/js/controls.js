function setupControls( app ) {

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
