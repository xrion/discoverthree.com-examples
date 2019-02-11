import App from './vendor/App.module.js';

import setupRender from './renderer.js';

import loadEnvironment from './environment.js';

import createMaterials from './materials.js';
import createLights from './lights.js';
import createMeshes from './meshes.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  setupRender( app.renderer );

  const envMap = loadEnvironment();
  app.scene.background = envMap;
  app.camera.position.set( 2, 1, 1.5 );

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const materials = createMaterials( envMap );

  const meshes = createMeshes( materials );
  app.scene.add( meshes.plinth );

  const models = await loadModels( materials );
  app.scene.add( models.trumpet );

}

initScene();
