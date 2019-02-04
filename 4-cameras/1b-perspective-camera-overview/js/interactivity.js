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


function initFOVSlider( camera, cameraHelper ) {

  const slider = document.querySelector( '#fov-slider' );
  const value = document.querySelector( '#fov-value' );

  const effectiveFOV = document.querySelector( '#effective-fov-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    camera.fov = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    cameraHelper.update();

    updateEffectiveFOV( camera, effectiveFOV );

    e.preventDefault();

  } );

}

function initZoomSlider( camera, cameraHelper ) {

  const slider = document.querySelector( '#zoom-slider' );
  const value = document.querySelector( '#zoom-value' );

  const effectiveFOV = document.querySelector( '#effective-fov-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    camera.zoom = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    cameraHelper.update();

    updateEffectiveFOV( camera, effectiveFOV );

    e.preventDefault();

  } );

}

function initNearSlider( camera, cameraHelper ) {

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

function initFarSlider( camera, cameraHelper ) {

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

function switchCameraControl( app, cameraMain, cameraOverview, cameraHelper ) {

  let overview = false;

  const button = document.querySelector( '#switch-camera' );

  button.addEventListener( 'click', ( e ) => {

    if ( !overview ) {

      app.camera = cameraOverview;
      app.scene.add( cameraHelper );

      button.textContent = 'Switch to Main Camera';

    } else {

      app.camera = cameraMain;
      app.scene.remove( cameraHelper );

      button.textContent = 'Switch to Overview Camera';

    }

    overview = !overview;

    e.preventDefault();
  } );
}

function initCameraControls( app, cameraMain, cameraOverview, cameraHelper ) {

  initAspectValue( cameraMain, cameraHelper );
  initFOVSlider( cameraMain, cameraHelper );
  initZoomSlider( cameraMain, cameraHelper );
  initNearSlider( cameraMain, cameraHelper );
  initFarSlider( cameraMain, cameraHelper );

  switchCameraControl( app, cameraMain, cameraOverview, cameraHelper );

}
