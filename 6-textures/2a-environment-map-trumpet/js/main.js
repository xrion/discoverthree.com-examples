import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 0.6;
  app.camera.position.set( 2, 1, 1.5 );

  const envMap = loadEnvironments();
  app.scene.background = envMap;

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const materials = createMaterials( envMap );
  initEnvMapControls( materials, envMap );

  const meshes = createMeshes( materials );
  app.scene.add( meshes.plinth );

  const models = await loadModels( materials );
  app.scene.add( models.trumpet );

}

initScene();
