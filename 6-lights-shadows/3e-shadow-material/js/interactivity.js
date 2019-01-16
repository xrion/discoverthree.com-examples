function opacityControl( material ) {

  const slider = document.querySelector( '#opacity-slider' );
  const value = document.querySelector( '#opacity-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;

    material.opacity = parseFloat( slider.value );

    e.preventDefault();

  } );

}

function colorControl( material ) {

  const colorPicker = document.querySelector( '#color-picker' );

  colorPicker.addEventListener( 'input', ( e ) => {

    material.color.set( colorPicker.value );

    e.preventDefault();

  } );

}