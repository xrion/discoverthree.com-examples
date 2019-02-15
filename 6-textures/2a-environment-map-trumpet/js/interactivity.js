function setupEnvMapToggle( materialsArray, environments ) {

  const toggle = document.querySelector( '#envmap-toggle' );

  toggle.addEventListener( 'click', ( e ) => {

    materialsArray.forEach( ( material ) => {

      if ( e.target.checked ) {

        material.envMap = environments.sky;

      } else {

        material.envMap = null;

      }

      material.needsUpdate = true;

    } );


  } );

}

function setupEnvMapStrengthSlider( materialsArray ) {

  const slider = document.querySelector( '#envmap-strength-slider' );
  const value = document.querySelector( '#envmap-strength-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    const newValue = parseFloat( slider.value );

    materialsArray.forEach( ( material ) => {

      material.envMapIntensity = newValue;

    } );

    e.preventDefault();

  } );

}

function setupLightIntensitySlider( lights, name ) {

  const light = lights[ name ];

  const slider = document.querySelector( `#${name}-light-intensity-slider` );
  const value = document.querySelector( `#${name}-light-intensity-value` );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    const newValue = parseFloat( slider.value );

    light.intensity = newValue;

    e.preventDefault();

  } );

}

function setupToneMappingExposureSlider( renderer ) {

  const slider = document.querySelector( '#tone-mapping-exposure-slider' );
  const value = document.querySelector( '#tone-mapping-exposure-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    const newValue = parseFloat( slider.value );

    renderer.toneMappingExposure = newValue;

    e.preventDefault();

  } );

}


export default function setupEnvMapControl( renderer, lights, materials, environments ) {

  const materialsArray = Object.values( materials );

  setupEnvMapToggle( materialsArray, environments );
  setupEnvMapStrengthSlider( materialsArray );

  setupLightIntensitySlider( lights, 'ambient' );
  setupLightIntensitySlider( lights, 'main' );

  setupToneMappingExposureSlider( renderer );

}
