function setupControls( mesh, app ) {

  const orbitControls = app.controls;

  const transformControls = new THREE.TransformControls( app.camera, app.container );
  transformControls.attach( mesh );

  app.scene.add( transformControls );
  transformControls.visible = false;

  transformControls.addEventListener( 'dragging-changed', ( e ) => {

    orbitControls.enabled = !e.value;

  } );

  initOverlay( orbitControls, transformControls );

}

function initOverlay( orbitControls, transformControls ) {

  orbitControls.enabled = false;

  const overlay = document.querySelector( '#controls' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';

    orbitControls.enabled = true;
    transformControls.visible = true;

  } );

}
