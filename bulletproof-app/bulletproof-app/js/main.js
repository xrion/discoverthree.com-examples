import {
  Color,
} from './vendor/three/three.module.js';

import App from './App.js';

import createLights from './lights.js';

import loadModels from './models.js';

function initScene() {

  const app = new App( {
    container: '#scene-container',
  } );

  app.init();

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -1.5, 1.5, 6.5 );

  app.start();

  const lights = createLights();

  loadModels( app.scene );

  app.scene.add(

    lights.ambient,
    lights.main,

  );

}

initScene();
