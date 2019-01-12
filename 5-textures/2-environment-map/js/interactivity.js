function materialControls( model ) {

}

function envMapStrengthControl( materials ) {

}

function setupLightControls( lights ) {

  lightStrengthControl( lights.ambientLight, 'ambient' );
  lightStrengthControl( lights.frontLight, 'frontLight' );
  lightStrengthControl( lights.backLight, 'backLight' );

}

function lightStrengthControl( light, idString ) {

  const slider = document.querySelector( `#${idString}-slider` );
  const value = document.querySelector( `#${idString}-value` );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;

    light.intensity = parseFloat( slider.value );

    e.preventDefault();

  } );

}