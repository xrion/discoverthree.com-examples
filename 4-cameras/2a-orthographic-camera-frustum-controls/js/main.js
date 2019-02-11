import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import setupCameras from './camera.js';
import setupCameraParamControls from './interactivity.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

function initScene() {

  const app = new App( '#scene-container' );

  // remember to create the camera before calling app.init
  setupCameras( app );

  app.init();

  app.renderer.toneMappingExposure = 0.5;
  app.scene.background = new Color( 0x23485c );

  setupCameraParamControls( app.camera, app.controls );

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( ...meshes.spheresArray );

}

initScene();
