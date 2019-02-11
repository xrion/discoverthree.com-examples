function initZoomSlider( camera, controls ) {

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

export default function setupCameraControls( app, cameraMain, cameraOverview, cameraHelper ) {

  initZoomSlider( cameraMain, app.controls );
  initNearSlider( cameraMain );
  initFarSlider( cameraMain );

  switchCameraControl( app, cameraMain, cameraOverview, cameraHelper );

}
