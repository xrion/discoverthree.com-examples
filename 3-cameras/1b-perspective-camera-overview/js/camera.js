function initCamera( app ) {

  const cameraMain = app.camera;

  cameraMain.position.set( 5, 5, 30 );
  cameraMain.near = 10;
  cameraMain.far = 50;
  cameraMain.updateProjectionMatrix();

  const cameraOverview = cameraMain.clone();

  cameraOverview.position.set( 150, 50, 100 );

  cameraOverview.lookAt( 0, 0, 0 );

  cameraOverview.far = 1000;
  cameraOverview.updateProjectionMatrix();

  const cameraHelper = new THREE.CameraHelper( cameraMain );


  initCameraControls( app, cameraMain, cameraOverview, cameraHelper );

}
