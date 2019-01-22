function initCamera( camera ) {

  camera.position.set( 5, 5, 10 );

  // reduce the far clipping plane from the default of 100
  // so that we can see its effect more easily
  camera.far = 100;

  // remember that we need to update the camera's frustum after
  // changing the clipping planes
  camera.updateProjectionMatrix();

  initCameraControls( camera );

}
