function setupHelperVisibilityToggle( helper ) {

  const toggle = document.querySelector( '#show-helper' );

  toggle.addEventListener( 'input', () => {

    helper.visible = !helper.visible;

  } );

}

function setupColorPicker( light, helper ) {

  const colorPicker = document.querySelector( '#color-picker' );

  colorPicker.addEventListener( 'input', ( e ) => {

    light.color.set( colorPicker.value );
    helper.update();

    e.preventDefault();

  } );

}

function setupParameterSlider( parameter, light ) {

  const slider = document.querySelector( `#${parameter}-slider` );
  const value = document.querySelector( `#${parameter}-value` );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;

    light[parameter] = parseFloat( slider.value );

    e.preventDefault();

  } );

}

export default function setupControls( lights, helpers, renderer ) {

  setupHelperVisibilityToggle( helpers.directionalLightHelper );

  setupColorPicker( lights.main, helpers.directionalLightHelper );

  setupParameterSlider( 'intensity', lights.main );

  setupParameterSlider( 'toneMappingExposure', renderer );
}
