import App from './vendor/App.js';

import createMeshes from './meshes.js';

function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;s
  app.camera.position.set( 0, 0, 5 );

  app.start();

  const meshes = createMeshes();
  app.scene.add( meshes.spiral );

}

initScene();
