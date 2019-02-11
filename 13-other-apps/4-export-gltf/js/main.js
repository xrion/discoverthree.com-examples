import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 0.5;

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 3, 2, 15 );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.torusKnot );

  const clips = initAnimation( meshes.torusKnot );

  setupExportControl( meshes.torusKnot, clips );

  app.start();

}

initScene();
