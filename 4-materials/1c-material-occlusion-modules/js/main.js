import { Color } from './vendor/three.module.js';

import App from './App.js';
import initMeshes from './meshes.js';
import loadModels from './models.js';

function init() {
  const app = new App('#container');

  app.init();

  app.scene.background = new Color(0x8fbcd4);
  app.camera.position.set(0, 0, 20);

  initMeshes(app.scene);
  loadModels(app.scene);

  app.start();
}

init();
