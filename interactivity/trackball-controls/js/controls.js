import {
  TrackballControls,
} from './vendor/three/controls/TrackballControls.js';

function initOverlay( controls ) {

  // controls.enabled = false;

  const overlay = document.querySelector( '#overlay' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';
    controls.enabled = true;

  } );

}

export default function createCameraControls( app ) {

  app.controls = new TrackballControls( app.camera );

  initOverlay( app.controls );

  // there are a couple of things we need to set up for these controls

  // first of all, point them where we want

  app.controls.target.set( 0, 5, 0 );

  // next, they have a function to automatically deal with resized
  // screens. We just need to make sure it gets called correctly
  app.onResize = () => {

    app.controls.handleResize();

  };

  // The rest of the controls are similar to OrbitControls parameters
  // we'll leave them all at their default
  // They're included here for reference, but not actually changed

  // app.controls.screen = {
  //   left: 0, top: 0, width: 0, height: 0,
  // };

  // app.controls.rotateSpeed = 1.0;
  // app.controls.zoomSpeed = 1.2;
  // app.controls.panSpeed = 0.3;

  // app.controls.noRotate = false;
  // app.controls.noZoom = false;
  // app.controls.noPan = false;

  // app.controls.staticMoving = false;
  // app.controls.dynamicDampingFactor = 0.2;

  // app.controls.minDistance = 0;
  // app.controls.maxDistance = Infinity;

  // app.controls.keys = [ 65 /* A */, 83 /* S */, 68 /* D */ ];

  // we can rest the controls to their original state using
  // unlike OrbitControls, they do not have a corresponding
  // saveState() method
  // app.controls.reset();

  // This is already being called once per frame in our app
  // It's not required for the controls to work, but it's needed
  // for damping to work
  // app.controls.update( delta );

  // If we want to stop using controls, we need to call this function.
  // It removes all the eventListeners that that controls set up
  // app.controls.dispose();

  // if you look through the TrackBallControls.js file, you'll see a couple of other public methods,
  // However, these are not intended to be called manually
  // and doing so will probably not have the effect that you desire!
  // app.controls.rotateCamera();
  // app.controls.zoomCamera();
  // app.controls.panCamera();
  // app.controls.checkDistances();

  app.controls.addEventListener( 'start', () => {

    console.log( 'Start event called.' );

  } );

  app.controls.addEventListener( 'change', () => {

    console.log( 'Change event called.' );

  } );

  app.controls.addEventListener( 'end', () => {

    console.log( 'End event called.' );

  } );

}
