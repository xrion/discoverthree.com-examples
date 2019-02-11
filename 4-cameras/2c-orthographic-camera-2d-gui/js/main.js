import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 0.5;

  app.scene.background = new Color( 0x00BFFF );

  // adding fog in the distance, the same color as the sky is
  // a cheap way to blur the boundary between ground and sky
  app.scene.fog = new Fog( 0x00BFFF, 115, 150 );

  app.camera.position.set( 10, 10, 20 );

  app.controls.target.y = 5;

  // disable keys in the orbit controls so that we can use
  // them to control our horse
  app.controls.enableKeys = false;

  const appGUI = initGUI();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.ground );

  const models = await loadModels();

  app.scene.add( models.main );
  appGUI.scene.add( models.gui );

  initControls( models.main, models.gui );

  app.start();

}

initScene();
