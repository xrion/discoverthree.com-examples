import {
  CameraHelper,
  B,
} from './vendor/three/three.module.js';

export deafult function initCamera( app ) {

  const cameraMain = app.camera;

  cameraMain.position.set( 5, 5, 30 );
  cameraMain.near = 0.1;
  cameraMain.far = 50;
  cameraMain.updateProjectionMatrix();

  const cameraOverview = cameraMain.clone();

  cameraOverview.position.set( 150, 50, 100 );

  cameraOverview.lookAt( 0, 0, 0 );

  cameraOverview.far = 1000;
  cameraOverview.updateProjectionMatrix();

  const cameraHelper = new CameraHelper( cameraMain );
  cameraHelper.userData.onUpdate = () => {

    cameraHelper.update();

  };

  app.autoResize = false;

  function onResize() {

    cameraMain.aspect = app.container.clientWidth / app.container.clientHeight;
    cameraMain.updateProjectionMatrix();

    cameraOverview.aspect = app.container.clientWidth / app.container.clientHeight;
    cameraOverview.updateProjectionMatrix();

    app.renderer.setSize( app.container.clientWidth, app.container.clientHeight );
    app.renderer.setPixelRatio( Math.min( window.devicePixelRatio, app.maxPixelRatio ) );

  }

  window.addEventListener( 'resize', onResize );

  initCameraControls( app, cameraMain, cameraOverview, cameraHelper );

}
