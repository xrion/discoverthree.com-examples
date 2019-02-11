import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 0.15;

  const environments = loadEnvironments();
  app.scene.background = environments.castle;

  app.camera.position.set( -20, 0, -20 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const sprites = initSprites();
  app.scene.add( sprites.leaves );

  app.start();

}

initScene();
