function initAspectValue( camera ) {

  const value = document.querySelector( '#aspect-value' );

  value.textContent = camera.aspect.toFixed( 4 );

  window.addEventListener( 'resize', () => {

    value.textContent = camera.aspect.toFixed( 4 );

  } );

}

function updateEffectiveFOV( camera, domeElement ) {

  const effectiveFOV = camera.getEffectiveFOV();

  domeElement.textContent = effectiveFOV.toFixed( 4 );

}

function initFOVSlider( camera ) {

  const slider = document.querySelector( '#fov-slider' );
  const value = document.querySelector( '#fov-value' );

  const effectiveFOV = document.querySelector( '#effective-fov-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    camera.fov = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    updateEffectiveFOV( camera, effectiveFOV );

    e.preventDefault();

  } );

}

function initZoomSlider( camera ) {

  const slider = document.querySelector( '#zoom-slider' );
  const value = document.querySelector( '#zoom-value' );

  const effectiveFOV = document.querySelector( '#effective-fov-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    camera.zoom = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    updateEffectiveFOV( camera, effectiveFOV );

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

export default function setupCameraParamControls( camera ) {

  initAspectValue( camera );
  initFOVSlider( camera );
  initZoomSlider( camera );
  initNearSlider( camera );
  initFarSlider( camera );

}
