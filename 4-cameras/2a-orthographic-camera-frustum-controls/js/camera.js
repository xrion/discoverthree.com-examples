import {
  OrthographicCamera.
} from './vendor/three/three.module.js';


export default function initCamera( app ) {

  const width = app.container.clientWidth;
  const height = app.container.clientHeight;

  app.camera = new OrthographicCamera( -width / 2, width / 2, height / 2, -height / 2, 20, 50 );

  // position the camera
  // remember that it doesn't matter how far away we
  // put the camera, so long as the objects fall inside the
  // frustum they will remain the same size.
  app.camera.position.z = 30;

  // instead, we can use camera.zoom to fine tune our view of the scene
  app.camera.zoom = 30;
  app.camera.updateProjectionMatrix();

  // the app's auto resizing is only set up for PerspectiveCamera
  app.autoResize = false;

  function onResize() {

    const newWidth = app.container.clientWidth;
    const newHeight = app.container.clientHeight;

    app.camera.left = -newWidth / 2;
    app.camera.right = newWidth / 2;
    app.camera.top = newHeight / 2;
    app.camera.bottom = -newHeight / 2;

    app.camera.updateProjectionMatrix();

    app.renderer.setSize( newWidth, newHeight );
    app.renderer.setPixelRatio( Math.min( window.devicePixelRatio, app.maxPixelRatio ) );

  }

  window.addEventListener( 'resize', onResize );

}
