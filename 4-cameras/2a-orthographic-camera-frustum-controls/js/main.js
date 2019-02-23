import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import setupControls from './interactivity.js';

async function initScene() {

  const app = createApp();
  app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();

  const meshes = createMeshes( geometries, materials );

  setupControls( app );

  app.scene.add(

    lights.ambient,
    lights.main,

    ...meshes.spheresArray,

  );

}

initScene();
