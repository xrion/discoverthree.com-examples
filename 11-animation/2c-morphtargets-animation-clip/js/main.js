import createApp from './app.js';

import createLights from './lights.js';
import loadModels from './models.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = createApp();

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 5, 5, 10 );

  app.start();

  const lights = createLights();

  const models = await loadModels();

  setupAnimation( models.morphCube );

  app.scene.add(

    lights.ambient,
    lights.main,

    models.morphCube,

  );

}

initScene();
