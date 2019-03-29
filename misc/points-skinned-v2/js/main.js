import createApp from './app.js';

import createMaterials from './materials.js';
import createPoints from './points.js';
import createMeshes from './meshes.js';
import createLights from './lights.js';
import createHelpers from './helpers.js';

import loadEnvironment from './environment.js';

import loadModels from './models.js';

import setupGeometry from './geometries.js';
import setupAnimation from './animation.js';

async function initScene() {

  const app = createApp();
  app.start();

  const environments = loadEnvironment();
  app.scene.background = environments.sky;

  const lights = createLights();

  const materials = createMaterials( environments );

  const models = await loadModels();

  const geometries = setupGeometry( models );

  const meshes = createMeshes( geometries, materials );

  const points = createPoints( geometries, materials, models );

  const helpers = createHelpers( lights );

  setupAnimation( points, models, app );

  app.scene.add(

    lights.ambient,
    lights.main,

    points.dancer,
    points.surfaceClone,

    meshes.plinth,
    // meshes.box,

    helpers.shadowCameraHelper,

  );

}

initScene();
