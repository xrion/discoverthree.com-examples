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

  app.init();

  app.renderer.toneMappingExposure = 0.05;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

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

    lights.ambient,

    meshes.plinth,
    meshes.shapes,

    ...models.horsesArray,

    helpers.hemisphereLightHelper,

  );

  console.log( 'Here\'s our HemisphereLight: ', lights.ambient );

}

initScene();
