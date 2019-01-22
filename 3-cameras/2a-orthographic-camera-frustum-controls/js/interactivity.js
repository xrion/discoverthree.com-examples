function initZoomSlider( camera ) {

  const slider = document.querySelector( '#zoom-slider' );
  const value = document.querySelector( '#zoom-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    camera.zoom = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    e.preventDefault();

  } );

}

function initNearSlider( camera ) {

  const slider = document.querySelector( '#near-slider' );
  const value = document.querySelector( '#near-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    camera.near = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    e.preventDefault();

  } );

}

function initFarSlider( camera ) {

  const slider = document.querySelector( '#far-slider' );
  const value = document.querySelector( '#far-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    camera.far = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    e.preventDefault();

  } );

}

function initCameraControls( camera ) {

  initZoomSlider( camera );
  initNearSlider( camera );
  initFarSlider( camera );

}
