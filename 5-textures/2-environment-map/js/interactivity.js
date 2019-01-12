let selectedEnvMap = null;
let sceneBGColor = null;


function setupMaterialTypeSelect( model, materials ) {

  console.log(model, materials );

  const select = document.querySelector( '#material-select' );

  select.addEventListener( 'change', ( e ) => {

    e.preventDefault();

    const type = e.target.value;

    console.log(materials[ `silver${type}` ]);

    model.children[ 0 ].material = materials[ `silver${type}` ];
    model.children[ 1 ].material = materials[ `brass${type}` ];

  } );

}

function setupMaterialControls( materials, envMaps, scene ) {

  envMapStrengthControl( materials );
  envMapSelectControl( materials, envMaps, scene );
  sceneBackgroundToggle( scene, envMaps );
  setupMaterialParamControl( materials, 'metalness' );
  setupMaterialParamControl( materials, 'roughness' );
}

const setSceneBackGround = ( scene, toggleEnabled ) => {

  if( toggleEnabled && selectedEnvMap !== null ) scene.background = selectedEnvMap;
  else scene.background = sceneBGColor;

}

function sceneBackgroundToggle( scene ) {

  // store a reference to the initial scene background color
  sceneBGColor = scene.background;

  const toggle = document.querySelector( '#show-background' );

  toggle.addEventListener( 'change', ( e ) => {

    setSceneBackGround( scene, e.target.checked );

    e.preventDefault();

  } );

}

const setEnvMap = ( materials, envMap ) => {

  Object.values( materials ).forEach( ( material ) => {

    selectedEnvMap = envMap;
    material.envMap = selectedEnvMap;
    material.needsUpdate = true;

    console.log(material);

  } );
}

function envMapSelectControl( materials, envMaps, scene ) {

  const select = document.querySelector( '#envmap-select' );
  const bgToggle = document.querySelector( '#show-background' );

  select.addEventListener( 'change', ( e ) => {

    e.preventDefault();

    switch ( e.target.value ) {
      case 'cubemap':
        setEnvMap( materials, envMaps.cubemap );
        break;
      case 'equirectanguar':
        setEnvMap( materials, envMaps.equirectangular );
        break;
      case 'spherical':
        setEnvMap( materials, envMaps.spherical );
        break;
      default:
        setEnvMap( materials, null );
        break;
    }

    setSceneBackGround( scene, bgToggle.checked )

  } );

}

function envMapStrengthControl( materials ) {

  const slider = document.querySelector( '#envmap-strength-slider' );
  const value = document.querySelector( '#envmap-strength-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    const newValue = parseFloat( slider.value );

    Object.values( materials ).forEach( ( material ) => {

      if( material.isMeshStandardMaterial ) material.envMapIntensity = newValue;
      else material.reflectivity = newValue;

    } );

    e.preventDefault();

  } );

}

function setupMaterialParamControl( materials, param ) {

  const slider = document.querySelector( `#${param}-slider` );
  const value = document.querySelector( `#${param}-value` );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    const newValue = parseFloat( slider.value );

    Object.values( materials ).forEach( ( material ) => {

      if( material[ param ] !== undefined ) material[ param ] = newValue;

    } );

  } );

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