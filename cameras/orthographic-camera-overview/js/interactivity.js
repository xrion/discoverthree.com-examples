function initZoomSlider( camera, controls, cameraHelper ) {

  const slider = document.querySelector( '#zoom-slider' );
  const value = document.querySelector( '#zoom-value' );

  const update = () => {

    value.textContent = slider.value;
    camera.zoom = parseFloat( slider.value );
    camera.updateProjectionMatrix();

    cameraHelper.update();

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

function switchCameraControl( app, cameras, cameraHelper ) {

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

export default function setupCameraControls( app, cameras, helpers ) {

  initZoomSlider( cameras.main, app.controls, helpers.cameraHelper );
  initNearSlider( cameras.main, helpers.cameraHelper );
  initFarSlider( cameras.main, helpers.cameraHelper );

  switchCameraControl( app, cameras, helpers.cameraHelper );

}
