import createApp from './app.js';

import loadEnvironment from './environment.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import loadTextures from './textures.js';
import setupMaterials from './materials.js';
import createMeshes from './meshes.js';

import loadModels from './models.js';

async function initScene() {

  const app = createApp();
  app.start();

  const environments = loadEnvironment();
  app.scene.background = environments.sky;

  const lights = createLights();

  const models = await loadModels();

  const geometries = createGeometries();
  const textures = loadTextures();
  const materials = setupMaterials( models, environments, textures );
  const meshes = createMeshes( geometries, materials );

  app.scene.add(

    lights.ambient,
    // lights.main,

    meshes.plinth,

    models.sculptures,

  );

}

initScene();
