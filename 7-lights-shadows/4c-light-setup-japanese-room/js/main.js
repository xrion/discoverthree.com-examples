import createApp from './app.js';

import createLights from './lights.js';

import loadModels from './models.js';

async function initScene() {

  const app = createApp();

  app.init();

  app.renderer.toneMappingExposure = 0.8;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 2, 5, 10 );

  app.controls.target.y = 2;

  app.start();

  const lights = createLights();

  const models = await loadModels();

  app.scene.add(

    lights.ambient,
    lights.main,

    models.room,

  );

}

initScene();
