import {
  Color,
} from './vendor/three/three.module.js';

import App from './App.js';

import createLights from './lights.js';

import loadModels from './models.js';

function initScene() {

  const spec = {

    container: '#scene-container',

    renderer: {

      // override the three.js default of 2.0
      gammaFactor: 2.2,

      // should nearly always be true, unless using postprocessing or GPGPU
      gammaOutput: true,

      // set this to a value less than 3 to increase performance on low power mobile devices with high pixel ratio
      maxPixelRatio: Infinity,

    },

  };

  const app = new App( spec );

  app.init();

  // app.renderer.toneMappingExposure = 0.8;
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
