import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( '#scene-container' );

  // remember to setup the camera before calling app.init
  initCamera( app );

  app.init();

  app.renderer.toneMappingExposure = 0.4;

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 20, 10, 40 );

  setupControls( app );

  app.onResize = () => {

    app.controls.handleResize();

  };

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.plinth, meshes.shapes );

  const models = await loadModels();
  app.scene.add( ...models.horsesArray );

  app.start();

}

initScene();
