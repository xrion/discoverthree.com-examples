import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createPoints from './points.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x34456f );
  app.camera.position.set( 0, 0, 10 );

  app.start();

  const points = createPoints();
  app.scene.add( points.sphere );

}

initScene();
