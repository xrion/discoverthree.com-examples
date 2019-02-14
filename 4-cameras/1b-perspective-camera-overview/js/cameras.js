function setupMainCamera( app ) {

  app.camera.position.set( 5, 5, 30 );
  app.camera.near = 10;
  app.camera.far = 50;

  app.camera.updateProjectionMatrix();

}

function createOverviewCamera( app ) {

  const overviewCamera = app.camera.clone();

  overviewCamera.position.set( 150, 50, 100 );

  overviewCamera.lookAt( 0, 0, 0 );

  overviewCamera.far = 1000;
  overviewCamera.updateProjectionMatrix();

  return overviewCamera;

}

export default function setupCameras( app ) {

  setupMainCamera( app );

  return {

    main: app.camera,
    overview: createOverviewCamera( app ),

  };

}
