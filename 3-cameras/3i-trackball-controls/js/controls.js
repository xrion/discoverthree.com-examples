function setupControls( app ) {

  app.controls = new THREE.TrackballControls( app.camera, app.container );

  app.controls.target.set( 0, 5, 0 );

  app.controls.rotateSpeed = 1.0;
  app.controls.zoomSpeed = 1.2;
  app.controls.panSpeed = 0.8;

  app.controls.noZoom = false;
  app.controls.noPan = false;

  app.controls.staticMoving = true;
  app.controls.dynamicDampingFactor = 0.3;

  app.controls.keys = [ 65, 83, 68 ];

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
