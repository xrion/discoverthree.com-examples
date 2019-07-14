import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import createHelpers from './helpers.js';

import loadModels from './models.js';

import setupControls from './interactivity.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = createApp();
  app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const helpers = createHelpers( lights );

  const models = await loadModels();

  setupAnimation( meshes, models );

  setupControls( lights, helpers, app.renderer );

  app.scene.add(

    // lights.ambient,
    lights.main,

    meshes.plinth,
    meshes.shapes,

    ...models.horsesArray,

    helpers.spotLightHelper,

  );

  console.log( 'Here\'s our SpotLight: ', lights.main );

}

initScene();
