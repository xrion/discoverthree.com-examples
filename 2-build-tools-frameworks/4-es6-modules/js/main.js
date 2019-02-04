import { Color } from './vendor/three.module.js';

import App from './App.js';
import loadModels from './models.js';

function init() {
  const app = new App( '#container' );

  app.init();

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -2.5, 2.5, 7.5 );

  loadModels( app.scene );

  app.start();
}

init();
