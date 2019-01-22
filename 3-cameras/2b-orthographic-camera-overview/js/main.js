function init() {

  const app = new THREE_APP( '#container' );

  const cameras = initCameras( app );

  app.init();

  initCameraControls( app, cameras.cameraMain, cameras.cameraOverview, cameras.cameraHelper );

  app.scene.background = new THREE.Color( 0x23485c );

  initLights( app.scene );
  initMeshes( app.scene );



  app.start();

}

init();
