function initCamera( app ) {

  const cameraOverview = new THREE.PerspectiveCamera( 35, app.container.clientWidth / app.container.clientHeight, 1, 1000 );
  cameraOverview.position.set( 2000, 0, 2000 );
  cameraOverview.lookAt( 0, 0, 0 );
  cameraOverview.far = 10000;
  cameraOverview.updateProjectionMatrix();

  // now replace it in the app with a new orthographic camera
  const width = app.container.clientWidth;
  const height = app.container.clientHeight;

  const cameraMain = new THREE.OrthographicCamera( -width / 2, width / 2, height / 2, -height / 2, 1, 1000 );
  app.camera = cameraMain;

  // position the camera
  // remember that it doesn't matter how far away we
  // put the camera, so long as the objects fall inside the
  // frustum they will remain the same size.
  cameraMain.position.z = 500;

  // the app's auto resizing is only set up for PerspectiveCamera
  app.autoResize = false;

  function onResize() {

    const newWidth = app.container.clientWidth;
    const newHeight = app.container.clientHeight;

    cameraOverview.aspect = newWidth / newHeight;
    cameraOverview.updateProjectionMatrix();

    cameraMain.left = -newWidth / 2;
    cameraMain.right = newWidth / 2;
    cameraMain.top = newHeight / 2;
    cameraMain.bottom = -newHeight / 2;

    cameraMain.updateProjectionMatrix();

    app.renderer.setSize( newWidth, newHeight );
    app.renderer.setPixelRatio( Math.min( window.devicePixelRatio, app.maxPixelRatio ) );

  }

  window.addEventListener( 'resize', onResize );

  const cameraHelper = new THREE.CameraHelper( cameraMain );

  cameraHelper.userData.onUpdate = () => {

    cameraHelper.update();

  };

  initCameraControls( app, cameraMain, cameraOverview, cameraHelper );

}
