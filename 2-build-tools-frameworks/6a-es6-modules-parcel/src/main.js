import { Color } from 'three';
import App from './vendor/App.module.js';

import createLights from './lights.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( '#container' );

  app.init();

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -2.5, 2.5, 6 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const models = await loadModels();
  app.scene.add( models.parrot, models.flamingo, models.stork );

  app.start();

}

initScene();
