import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createShapes from './shapes.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -2.5, 2.5, 6 );

  app.start();

  const shapes = createShapes();
  app.scene.add( shapes.dashedSquare );

}

initScene();
