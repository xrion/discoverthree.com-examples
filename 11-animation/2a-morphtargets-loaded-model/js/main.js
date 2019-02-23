import createApp from './app.js';

import createLights from './lights.js';

import createMaterials from './materials.js';

import loadModels from './models.js';

import setupControls from './interactivity.js';

async function initScene() {

  const app = createApp();

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 5, 5, 10 );

  app.start();

  const lights = createLights();

  const materials = createMaterials();

  const models = await loadModels( materials );

  setupControls( models );

  app.scene.add(

    lights.ambient,
    lights.main,

    models.morphCube,

  );

  console.log( `Here's the model we just loaded: ${models.morphCube}` );

}

initScene();
