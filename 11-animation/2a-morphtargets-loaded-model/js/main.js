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
  app.start();

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 5, 5, 10 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const models = await loadModels();
  app.scene.add( models.morphCube );

  initMorphControls( models.morphCube );

}

initScene();
