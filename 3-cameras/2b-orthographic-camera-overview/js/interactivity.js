function initZoomSlider( camera, cameraHelper ) {

  const slider = document.querySelector( '#zoom-slider' );
  const value = document.querySelector( '#zoom-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    camera.zoom = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    cameraHelper.update();

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

  initZoomSlider( cameraMain, cameraHelper );
  initNearSlider( cameraMain, cameraHelper );
  initFarSlider( cameraMain, cameraHelper );

  switchCameraControl( app, cameraMain, cameraOverview, cameraHelper );

}
