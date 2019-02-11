import {
  Color,
  SpotLightHelper,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import setupLightTargetControls from './interactivity.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

async function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 0.4;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();

  app.scene.add(
    meshes.ground,
    meshes.plinth,
    meshes.targets.front,
    meshes.targets.middle,
    meshes.targets.rear,
  );

  const lightHelper = new SpotLightHelper( lights.main );
  app.scene.add( lightHelper );

  setupLightTargetControls( lights, lightHelper, meshes.targets );

}

initScene();
