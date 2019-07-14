import {
  PCFSoftShadowMap,
} from './vendor/three/three.module.js';

import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

// import createHelpers from './helpers.js';

import loadEnvironment from './environment.js';
import loadModels from './models.js';

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

  // const helpers = createHelpers( lights );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.plinth,

    models.trumpet,

    // helpers.shadowCameraHelper,

  );

}

initScene();
