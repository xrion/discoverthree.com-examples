function setupEnvMapToggle( materialsArray, envMap ) {

  const toggle = document.querySelector( '#envmap-toggle' );

  toggle.addEventListener( 'click', ( e ) => {

    materialsArray.forEach( ( material ) => {

      if ( e.target.checked ) {

        material.envMap = envMap;

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

export default function setupEnvMapControl( materials, envMap ) {

  const materialsArray = Object.values( materials );

  setupEnvMapToggle( materialsArray, envMap );
  setupEnvMapStrengthSlider( materialsArray );

}
