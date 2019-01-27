function setupControls( app ) {

  const controls = new THREE.PointerLockControls( app.camera, app.container );

  app.scene.add( controls.getObject() );

  initOverlay( controls );

}

function initOverlay( controls ) {

  const overlay = document.querySelector( '#controls' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';
    controls.lock();

  } );

}
