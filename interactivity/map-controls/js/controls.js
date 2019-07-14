import {
  Vector3,
} from './vendor/three/three.module.js';

import {
  MapControls,
} from './vendor/three/controls/MapControls.js';

function initOverlay( controls ) {

  controls.enabled = false;

  const overlay = document.querySelector( '#overlay' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';
    controls.enabled = true;

  } );

}

export default function createCameraControls( app ) {

  // setup the map controls. Our App will have skipped
  // setting up OrbitControls since we didn't load the script,
  // allowing us to set up a different controls manually
  app.controls = new MapControls( app.camera, app.container );

  initOverlay( app.controls );

  // the following are all the settings we can change for MapControls.
  // they are identical to the settings from OrbitControls
  // None of them are actually changed here, these are all default values

  // "target" sets the location of focus, where the object orbits around
  // app.controls.target = new Vector3();

  // How far you can dolly in and out ( PerspectiveCamera only )
  // app.controls.minDistance = 0;
  // app.controls.maxDistance = Infinity;

  // How far you can zoom in and out ( OrthographicCamera only )
  // app.controls.minZoom = 0;
  // app.controls.maxZoom = Infinity;

  // How far you can orbit vertically, upper and lower limits.
  // Range is 0 to Math.PI radians.
  // app.controls.minPolarAngle = 0; // radians
  // app.controls.maxPolarAngle = Math.PI; // radians

  // How far you can orbit horizontally, upper and lower limits.
  // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
  // app.controls.minAzimuthAngle = -Infinity; // radians
  // app.controls.maxAzimuthAngle = Infinity; // radians

  // Set to true to enable damping (inertia)
  // If damping is enabled, you must call controls.update() in your animation loop
  // app.controls.enableDamping = false;
  // app.controls.dampingFactor = 0.25;

  // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
  // Set to false to disable zooming
  // app.controls.enableZoom = true;
  // app.controls.zoomSpeed = 1.0;

  // Set to false to disable rotating
  // app.controls.enableRotate = true;
  // app.controls.rotateSpeed = 1.0;

  // Set to false to disable panning
  // app.controls.enablePan = true;
  // app.controls.panSpeed = 1.0;
  // app.controls.screenSpacePanning = false; // if true, pan in screen-space
  // app.controls.keyPanSpeed = 7.0; // pixels moved per arrow key push

  // Set to true to automatically rotate around the target
  // If auto-rotate is enabled, you must call controls.update() in your animation loop
  // app.controls.autoRotate = false;
  // app.controls.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

  // Set to false to disable use of the keys
  // app.controls.enableKeys = true;

  // The four arrow keys
  // app.controls.keys = {
  //   LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40,
  // };

  // Mouse buttons
  // // // app.controls.mouseButtons = { LEFT: MOUSE.LEFT, MIDDLE: MOUSE.MIDDLE, RIGHT: MOUSE.RIGHT };

  // we can save a "state", or current position, of the controls
  // app.controls.saveState();

  // ...and we can later restore that state using controls.reset()
  // app.controls.reset();

  // This is already being called once per frame in our app
  // It's not required for the controls to work, but it's needed if damping or autorate is enabled
  // app.controls.update();

  // finally, if we want to stop using controls, we need to call this function.
  // It removes all the eventListeners that that controls set up
  // app.controls.dispose();

  // finally, there are two functions to get the current angle

  // if London is 0 degrees, the Polar angle is how
  // far toward the North Pole we have rotated
  console.log( app.controls.getPolarAngle() );

  // .. and the Azimuthal angle is how far towards New York
  // we have rotated
  console.log( app.controls.getAzimuthalAngle() );

}
