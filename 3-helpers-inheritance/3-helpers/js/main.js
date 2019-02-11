import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createHelpers from './helpers.js';
import createLights from './lights.js';
import createMeshes from './meshes.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 25 );

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.box );

  const models = await loadModels();
  app.scene.add( models.parrot );

  const helpers = createHelpers( models.parrot );

  app.scene.add(
    helpers.arrowHelpers.left,
    helpers.arrowHelpers.right,
    helpers.axesHelper,
    helpers.boxHelper,
    helpers.box3Helper,
    helpers.gridHelper,
    helpers.planeHelpers.left,
    helpers.planeHelpers.right,
    helpers.polarGridHelper,
  );

}

initScene();
