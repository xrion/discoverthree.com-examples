import createApp from './app.js';

import createLights from './lights.js';

import loadEnvironment from './environment.js';

import loadModels from './models.js';

async function initScene() {

  const app = createApp();
  app.start();

  const environments = loadEnvironment();
  app.scene.background = environments.sky;

  const lights = createLights();

  const models = await loadModels( environments );

  app.scene.add(

    lights.ambient,
    lights.main,

    models.city,

  );

}

initScene();
