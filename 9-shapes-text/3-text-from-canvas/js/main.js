import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

import initCanvasTexture from './canvas2D.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 0.4;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const texture = initCanvasTexture();

  const meshes = createMeshes( texture );
  app.scene.add( meshes.box, meshes.sphere );


}

initScene();
