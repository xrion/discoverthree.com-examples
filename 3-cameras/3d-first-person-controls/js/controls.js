function setupControls( app ) {

  app.controls = new THREE.FirstPersonControls( app.camera, app.container );
  app.controls.target.set( 0, 0, 0 );
  app.controls.movementSpeed = 10;
  app.controls.lookSpeed = 0.075;


  app.controls.lookVertical = true;
  app.controls.constrainVertical = true;
  app.controls.verticalMin = Math.PI * 0.35;
  app.controls.verticalMax = Math.PI * 0.65;

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
