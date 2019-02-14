function setupZoomSlider( camera, controls ) {

  const slider = document.querySelector( '#zoom-slider' );
  const value = document.querySelector( '#zoom-value' );

  const update = () => {

    value.textContent = slider.value;
    camera.zoom = parseFloat( slider.value );
    camera.updateProjectionMatrix();

  };

  slider.addEventListener( 'input', ( e ) => {

    update();

    e.preventDefault();

  } );

  controls.addEventListener( 'change', () => {

    camera.zoom = camera.zoom.toFixed( 2 );

    slider.value = camera.zoom;

    update();


  } );

}

function setupNearSlider( camera ) {

  const slider = document.querySelector( '#near-slider' );
  const value = document.querySelector( '#near-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    camera.near = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    e.preventDefault();

  } );

}

function setupFarSlider( camera ) {

  const slider = document.querySelector( '#far-slider' );
  const value = document.querySelector( '#far-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    camera.far = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    e.preventDefault();

  } );

}

export default function setupControls( app ) {

  setupZoomSlider( app.camera, app.controls );
  setupNearSlider( app.camera );
  setupFarSlider( app.camera );

}
