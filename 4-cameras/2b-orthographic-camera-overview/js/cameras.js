import {
  OrthographicCamera,
  PerspectiveCamera,
} from './vendor/three/three.module.js';

function createMainCamera( app ) {

  const width = app.container.clientWidth;
  const height = app.container.clientHeight;

  const mainCamera = new OrthographicCamera( -width / 2, width / 2, height / 2, -height / 2, 20, 50 );

  // position the camera
  // remember that it doesn't matter how far away we
  // put the camera, so long as the objects fall inside the
  // frustum they will remain the same size.
  mainCamera.position.z = 30;

  // instead, we can use camera.zoom to fine tune our view of the scene
  mainCamera.zoom = 30;
  mainCamera.updateProjectionMatrix();

  return mainCamera;

}

function createOverViewCamera( app ) {

  const overviewCamera = new PerspectiveCamera( 35, app.container.clientWidth / app.container.clientHeight, 1, 1000 );
  overviewCamera.position.set( 100, 0, 100 );
  overviewCamera.lookAt( 0, 0, 0 );
  overviewCamera.far = 1000;
  overviewCamera.updateProjectionMatrix();

  return overviewCamera;

}


export default function setupCameras( app ) {

  const mainCamera = createMainCamera( app );
  app.camera = mainCamera;

  return {

    main: mainCamera,
    overview: createOverViewCamera( app ),

  };

}
