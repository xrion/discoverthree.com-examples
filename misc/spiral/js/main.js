import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 1;

  app.camera.position.set( 0, 0, 5 );

  app.start();

  const meshes = createMeshes();
  app.scene.add( meshes.spiral );

}

initScene();
