import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 15 );

  const shapes = initShapes();
  app.scene.add( shapes.lineSegments, shapes.line, shapes.lineLoop );

  app.start();

}

initScene();
