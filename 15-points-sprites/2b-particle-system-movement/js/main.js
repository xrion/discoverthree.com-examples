import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

function initScene() {

  const app = new App( '#scene-container' );


  app.scene.background = new Color( 0x34456f );

  app.init();

  app.camera.position.set( 0, 0, 10 );

  const points = initPoints();
  app.scene.add( points.sphere );

  app.start();

}

initScene();
