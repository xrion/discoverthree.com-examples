import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import setupRenderer from './renderer.js';

import createLights from './lights.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  setupRenderer( app.renderer );

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -10, 10, 10 );

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const models = await loadModels();
  app.scene.add( models.room );

}

initScene();
