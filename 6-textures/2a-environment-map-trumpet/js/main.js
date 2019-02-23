import createApp from './app.js';

import loadEnvironment from './environment.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import loadModels from './models.js';

import setupControls from './interactivity.js';

async function initScene() {

  const app = createApp();
  app.start();

  const environments = loadEnvironment();
  app.scene.background = environments.sky;

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials( environments );
  const meshes = createMeshes( geometries, materials );

  const models = await loadModels( materials );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.plinth,


    models.trumpet,

  );

  setupControls( app.renderer, lights, materials, environments );

}

initScene();
