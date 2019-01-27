function setupControls( meshes, app ) {

  const orbitControls = app.controls;

  const highlightMaterial = new THREE.MeshStandardMaterial( {

    color: 0xcc0000,
    transparent: true,
    opacity: 0.5,

  } );

  const dragControls = new THREE.DragControls( meshes, app.camera, app.container );

  const setMoving = ( mesh ) => {

    mesh.material = highlightMaterial;

    mesh.userData.animate = false;

    dragControls.enabled = true;
    orbitControls.enabled = false;

  };

  dragControls.addEventListener( 'hoveron', ( e ) => {

    setMoving( e.object );

  } );

  const reset = () => {

    meshes.forEach( ( mesh ) => {

      mesh.userData.animate = true;

      mesh.material = mesh.userData.material;

    } );

    dragControls.enabled = false;
    orbitControls.enabled = true;

  };

  dragControls.addEventListener( 'hoveroff', () => {

    setTimeout( reset(), 500 );

  } );

  initOverlay( orbitControls );

}

function initOverlay( controls ) {

  controls.enabled = false;

  const overlay = document.querySelector( '#controls' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';
    controls.enabled = true;

  } );

}
