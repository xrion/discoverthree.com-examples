import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

function initScene() {

  const app = new App( '#scene-container' );

  // remember to setup the camera before calling app.init
  initCamera( app );

  app.init();

  app.renderer.toneMappingExposure = 0.5;

  initCameraControls( app.camera, app.controls );

  app.scene.background = new Color( 0x23485c );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( ...meshes.spheresArray );

  app.start();

}

initScene();
