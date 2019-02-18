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

function setupShadowDimensionsSelect( light ) {

  const select = document.querySelector( '#map-size' );

  select.addEventListener( 'change', ( e ) => {

    e.preventDefault();

    const newDimension = e.target.value;

    light.shadow.mapSize.width = newDimension;
    light.shadow.mapSize.height = newDimension;

    // force the shadow map to refresh
    light.shadow.map.dispose(); // import and prevent memory leaks
    light.shadow.map = null;

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

export default function setupControls( lights, helpers ) {

  const shadowCamera = lights.main.shadow.camera;
  const helper = helpers.shadowCameraHelper;

  setupHelperVisibilityToggle( helper );

  setupShadowDimensionsSelect( lights.main );

  setupParameterSlider( 'bias', lights.main.shadow );
  setupParameterSlider( 'radius', lights.main.shadow );

  setupParameterSlider( 'near', shadowCamera, helper );
  setupParameterSlider( 'far', shadowCamera, helper );

}
