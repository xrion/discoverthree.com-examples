import {
  Group,
} from './vendor/three/three.module.js';

import createApp from './app.js';

import createComposers from './composers.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import createHelpers from './helpers.js';

import loadModels from './models.js';

import setupPostProcessing from './postProcessing.js';

import setupAnimations from './animation.js';
import setupControls from './interactivity.js';

async function initScene() {

  const app = createApp();
  app.start();

  const composers = createComposers( app.renderer );
  const passes = setupPostProcessing( composers, app );

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const helpers = createHelpers();

  const models = await loadModels();

  const birdGroup = new Group();

  setupAnimations( meshes, models, birdGroup );

  setupControls( materials, models, birdGroup, app, composers, passes );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.box,

    models.parrot,

    birdGroup,

    // ...models.birdsArray,

    helpers.polarGridHelper,

  );


}

initScene();
