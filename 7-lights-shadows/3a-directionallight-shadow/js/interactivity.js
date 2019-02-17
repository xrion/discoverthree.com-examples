import {
  BasicShadowMap,
  PCFShadowMap,
  PCFSoftShadowMap,
} from './vendor/three/three.module.js';

function setupHelperVisibilityToggle( helper ) {

  const toggle = document.querySelector( '#show-helper' );

  toggle.addEventListener( 'input', () => {

    helper.visible = !helper.visible;

  } );

}

function setupShadowTypeSelect( renderer ) {

  const select = document.querySelector( '#map-type' );

  select.addEventListener( 'change', ( e ) => {

    e.preventDefault();

    if ( e.target.value === 'basic' ) renderer.shadowMap.type = BasicShadowMap;
    else if ( e.target.value === 'pcf' ) renderer.shadowMap.type = PCFShadowMap;
    else renderer.shadowMap.type = PCFSoftShadowMap;

  } );

}

function setupShadowDimensionsSelect( light ) {

  const select = document.querySelector( '#map-size' );

  select.addEventListener( 'change', ( e ) => {

    e.preventDefault();

    const newDimension = e.target.value;

    light.shadow.mapSize.width = newDimension;
    light.shadow.mapSize.height = newDimension;

  } );

}


function setupParameterSlider( parameter, object, helper ) {

  const slider = document.querySelector( `#${parameter}-slider` );
  const value = document.querySelector( `#${parameter}-value` );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;

    object[parameter] = parseFloat( slider.value );

    if ( object.isCamera ) object.updateProjectionMatrix();

    if ( helper ) helper.update();

    e.preventDefault();

  } );

}

export default function setupControls( lights, helpers, renderer ) {

  const shadowCamera = lights.main.shadow.camera;
  const helper = helpers.shadowCameraHelper;

  setupHelperVisibilityToggle( helper );

  setupShadowTypeSelect( renderer );

  setupShadowDimensionsSelect( lights.main );

  setupParameterSlider( 'bias', lights.main.shadow );
  setupParameterSlider( 'radius', lights.main.shadow );


  setupParameterSlider( 'near', shadowCamera, helper );
  setupParameterSlider( 'far', shadowCamera, helper );
  setupParameterSlider( 'top', shadowCamera, helper );
  setupParameterSlider( 'right', shadowCamera, helper );
  setupParameterSlider( 'bottom', shadowCamera, helper );
  setupParameterSlider( 'left', shadowCamera, helper );


}
