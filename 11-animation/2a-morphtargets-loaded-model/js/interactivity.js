function spherifyControl( mesh ) {

  const slider = document.querySelector( '#spherify-slider' );
  const value = document.querySelector( '#spherify-value' );

  const spherifyIndex = mesh.morphTargetDictionary.spherify;

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    mesh.morphTargetInfluences[ spherifyIndex ] = slider.value;

    e.preventDefault();

  } );

}


function twistControl( mesh ) {

  const slider = document.querySelector( '#twist-slider' );
  const value = document.querySelector( '#twist-value' );

  const twistIndex = mesh.morphTargetDictionary.twist;

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    mesh.morphTargetInfluences[ twistIndex ] = slider.value;

    e.preventDefault();

  } );

}

function initMorphControls( mesh ) {

  spherifyControl( mesh );
  twistControl( mesh );

}
