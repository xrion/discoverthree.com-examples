function initOverlay( controls ) {

  controls.enabled = false;

  const overlay = document.querySelector( '#overlay' );

  overlay.addEventListener( 'click', () => {

    overlay.style.display = 'none';
    controls.enabled = true;

  } );

}

export default function setupCameraControls( orbitControls ) {

  initOverlay( orbitControls );

  // the following are all the settings we can change for OrbitControls.
  // None of them are actually changed here, these are all default values

  // "target" sets the location of focus, where the object orbits around
  // orbitControls.target = new Vector3();

  // How far you can dolly in and out ( PerspectiveCamera only )
  orbitControls.minDistance = 0;
  orbitControls.maxDistance = Infinity;

  // How far you can zoom in and out ( OrthographicCamera only )
  orbitControls.minZoom = 0;
  orbitControls.maxZoom = Infinity;

  // How far you can orbit vertically, upper and lower limits.
  // Range is 0 to Math.PI radians.
  orbitControls.minPolarAngle = 0; // radians
  orbitControls.maxPolarAngle = Math.PI; // radians

  // How far you can orbit horizontally, upper and lower limits.
  // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
  orbitControls.minAzimuthAngle = -Infinity; // radians
  orbitControls.maxAzimuthAngle = Infinity; // radians

  // Set to true to enable damping (inertia)
  // If damping is enabled, you must call controls.update() in your animation loop
  orbitControls.enableDamping = false;
  orbitControls.dampingFactor = 0.25;

  // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
  // Set to false to disable zooming
  orbitControls.enableZoom = true;
  orbitControls.zoomSpeed = 1.0;

  // Set to false to disable rotating
  orbitControls.enableRotate = true;
  orbitControls.rotateSpeed = 1.0;

  // Set to false to disable panning
  orbitControls.enablePan = true;
  orbitControls.panSpeed = 1.0;
  orbitControls.screenSpacePanning = false; // if true, pan in screen-space
  orbitControls.keyPanSpeed = 7.0; // pixels moved per arrow key push

  // Set to true to automatically rotate around the target
  // If auto-rotate is enabled, you must call controls.update() in your animation loop
  orbitControls.autoRotate = false;
  orbitControls.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

  // Set to false to disable use of the keys
  orbitControls.enableKeys = true;

  // The four arrow keys
  orbitControls.keys = {
    LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40,
  };

  // Mouse buttons
  // orbitControls.mouseButtons = { LEFT: MOUSE.LEFT, MIDDLE: MOUSE.MIDDLE, RIGHT: MOUSE.RIGHT };

  // we can save a "state", or current position, of the controls
  orbitControls.saveState();

  // ...and we can later restore that state using controls.reset()
  // orbitControls.reset();

  // This is already being called once per frame in our app
  // It's not required for the controls to work, but it's needed if damping or autorate is enabled
  // orbitControls.update();

  // finally, if we want to stop using controls, we need to call this function.
  // It removes all the eventListeners that that controls set up
  // orbitControls.dispose();

  // finally, there are two functions to get the current angle

  // if London is 0 degrees, the Polar angle is how
  // far toward the North Pole we have rotated
  orbitControls.getPolarAngle();

  // .. and the Azimuthal angle is how far towards New York
  // we have rotated
  orbitControls.getAzimuthalAngle();

}
