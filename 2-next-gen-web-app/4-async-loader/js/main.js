import createApp from './app.js';

import createLights from './lights.js';

import loadModels from './models.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = createApp();
  app.start();

  const lights = createLights();

  const models = await loadModels();

  setupAnimation( models );

  app.scene.add(

    lights.ambient,
    lights.main,

    models.parrot,
    models.flamingo,
    models.stork,

  );

}

initScene();
