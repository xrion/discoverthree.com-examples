import App from './vendor/App.module.js';

import createGeometry from './geometry.js';
import createMeshes from './meshes.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.camera.position.set( 0, 0, 10 );

  app.start();

  const geometry = createGeometry();
  const meshes = createMeshes( geometry.custom );
  app.scene.add( meshes.tri );

}

initScene();
