import {
  OrthographicCamera,
} from './vendor/three/three.module.js';

export default function setupCamera( app ) {

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

}
