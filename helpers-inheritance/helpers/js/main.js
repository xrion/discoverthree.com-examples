import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import loadModels from './models.js';

import createHelpers from './helpers.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = createApp();
  app.start();

  const lights = createLights();

  const geometries = createGeometries();

  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const models = await loadModels( materials );

  const helpers = createHelpers( models.parrot );

  setupAnimation( models );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.sphere,

    models.parrot,

    helpers.arrowHelpers.left,
    helpers.arrowHelpers.right,
    helpers.axesHelper,
    helpers.boxHelper,
    helpers.box3Helper,
    helpers.gridHelper,
    helpers.planeHelpers.left,
    helpers.planeHelpers.right,
    helpers.polarGridHelper,

  );

}

initScene();
