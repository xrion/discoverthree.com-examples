import {
  DeviceOrientationControls,
} from './vendor/three/controls/DeviceOrientationControls.js';

function initOverlay( controls ) {

  controls.enabled = false;

  const overlay = document.querySelector( '#overlay' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';
    controls.enabled = true;

  } );

}

export default function createCameraControls( app ) {

  app.controls = new DeviceOrientationControls( app.camera, app.container );

  initOverlay( app.controls );

  // how much to offset the rotation
  // app.controls.alphaOffset = 0; // radians

  // set automatically, don't change these

  // app.controls.deviceOrientation = {};
  // app.controls.screenOrientation = 0;

  // This is already being called once per frame in our app
  // Unlike the update function in OrbitControl,
  // it IS required to call this once per frame
  // app.controls.update();

  // If we want to stop using the controls, we need to call this function.
  // It removes all the eventListeners that that controls set up
  // app.controls.dispose();

  // called internally, don't use these
  // app.controls.connect();
  // app.controls.disconnect();

}

