function setupHelperVisibilityToggle( helper ) {

  const toggle = document.querySelector( '#show-helper' );

  toggle.addEventListener( 'input', () => {

    helper.visible = !helper.visible;

  } );

}

function setupColorPicker( selector, light, helper ) {

  const colorPicker = document.querySelector( `#${selector}-color-picker` );

  colorPicker.addEventListener( 'input', ( e ) => {

    if ( selector === 'sky' ) light.color.set( colorPicker.value );
    else light.groundColor.set( colorPicker.value );

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

  setupHelperVisibilityToggle( helpers.hemisphereLightHelper );

  setupColorPicker( 'sky', lights.ambient, helpers.hemisphereLightHelper );
  setupColorPicker( 'ground', lights.ambient, helpers.hemisphereLightHelper );

  setupParameterSlider( 'intensity', lights.ambient );

  setupParameterSlider( 'toneMappingExposure', renderer );

}
