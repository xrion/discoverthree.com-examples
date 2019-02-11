import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.camera.position.set( 0, 0, 20 );


  const meshes = createMeshes();
  app.scene.add( meshes.moon );
  app.controls.target.copy( meshes.moon.position );

  const models = await loadModels();
  app.scene.add( models.parrot );

  app.start();

}

initScene();
