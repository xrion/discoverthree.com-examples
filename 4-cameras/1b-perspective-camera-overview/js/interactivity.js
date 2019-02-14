function updateAspectRatioInfo( camera ) {

  const value = document.querySelector( '#aspect-value' );

  value.textContent = camera.aspect.toFixed( 4 );

  window.addEventListener( 'resize', () => {

    value.textContent = camera.aspect.toFixed( 4 );

  } );

}

function updateEffectiveFOVInfo( camera, domeElement ) {

  const effectiveFOV = camera.getEffectiveFOV();

  domeElement.textContent = effectiveFOV.toFixed( 4 );

}


function setupFOVSlider( camera, cameraHelper ) {

  const slider = document.querySelector( '#fov-slider' );
  const value = document.querySelector( '#fov-value' );

  const effectiveFOV = document.querySelector( '#effective-fov-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    camera.fov = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    cameraHelper.update();

    updateEffectiveFOVInfo( camera, effectiveFOV );

    e.preventDefault();

  } );

}

function setupZoomSlider( camera, cameraHelper ) {

  const slider = document.querySelector( '#zoom-slider' );
  const value = document.querySelector( '#zoom-value' );

  const effectiveFOV = document.querySelector( '#effective-fov-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    camera.zoom = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    cameraHelper.update();

    updateEffectiveFOVInfo( camera, effectiveFOV );

    e.preventDefault();

  } );

}

function setupNearClippingPlaneSlider( camera, cameraHelper ) {

  const slider = document.querySelector( '#near-slider' );
  const value = document.querySelector( '#near-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    camera.near = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    cameraHelper.update();

    e.preventDefault();

  } );

}

function setupFarClippingPlaneSlider( camera, cameraHelper ) {

  const slider = document.querySelector( '#far-slider' );
  const value = document.querySelector( '#far-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    camera.far = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    cameraHelper.update();

    e.preventDefault();

  } );

}

function setupCameraToggle( app, cameras, cameraHelper ) {

  let overview = false;

  const button = document.querySelector( '#switch-camera' );

  button.addEventListener( 'click', ( e ) => {

    if ( !overview ) {

      app.camera = cameras.overview;
      cameraHelper.visible = true;

      button.textContent = 'Switch to Main Camera';

    } else {

      app.camera = cameras.main;
      cameraHelper.visible = false;

      button.textContent = 'Switch to Overview Camera';

    }

    overview = !overview;

    e.preventDefault();

  } );
}

export default function setupControls( app, cameras, helpers ) {

  updateAspectRatioInfo( cameras.main, helpers.cameraHelper );
  setupFOVSlider( cameras.main, helpers.cameraHelper );
  setupZoomSlider( cameras.main, helpers.cameraHelper );
  setupNearClippingPlaneSlider( cameras.main, helpers.cameraHelper );
  setupFarClippingPlaneSlider( cameras.main, helpers.cameraHelper );

  setupCameraToggle( app, cameras, helpers.cameraHelper );

}
