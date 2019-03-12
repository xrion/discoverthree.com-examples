function setupHelperVisibilityToggle( helper ) {

  const toggle = document.querySelector( '#show-helper' );

  toggle.addEventListener( 'input', () => {

    helper.visible = !helper.visible;

  } );

}

function setupOpacitySlider( material ) {

  const slider = document.querySelector( '#opacity-slider' );
  const value = document.querySelector( '#opacity-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;

    material.opacity = parseFloat( slider.value );

    e.preventDefault();

  } );

}

function setupColorPicker( material ) {

  const colorPicker = document.querySelector( '#color-picker' );

  colorPicker.addEventListener( 'input', ( e ) => {

    material.color.set( colorPicker.value );

    e.preventDefault();

  } );

}

export default function setupControls( materials, helpers ) {

  setupHelperVisibilityToggle( helpers.shadowCameraHelper );

  setupOpacitySlider( materials.shadow );
  setupColorPicker( materials.shadow );

}
