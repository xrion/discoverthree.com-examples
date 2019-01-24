function spherifyControl( mesh ) {

  const slider = document.querySelector( '#spherify-slider' );
  const value = document.querySelector( '#spherify-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    mesh.morphTargetInfluences[ 0 ] = slider.value;

    e.preventDefault();

  } );

}


function twistControl( mesh ) {

  const slider = document.querySelector( '#twist-slider' );
  const value = document.querySelector( '#twist-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    mesh.morphTargetInfluences[ 1 ] = slider.value;

    e.preventDefault();

  } );

}

function initMorphControls( mesh ) {

  spherifyControl( mesh );
  twistControl( mesh );

}
