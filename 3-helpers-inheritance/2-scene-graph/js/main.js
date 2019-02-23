import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import createHelpers from './helpers.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = createApp();
  app.start();

  const lights = createLights();

  const geometries = createGeometries();

  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const helpers = createHelpers();

  setupAnimation( meshes );

  app.scene.add(

    lights.ambient,
    lights.main,

    // we'll add just the first mesh, but all of its children will be added too
    meshes.meshA,

    // axesHelper is your friend while you're
    // getting used to the coordinate system
    // green = y axis
    // red = x axis
    // blue = z axis
    // helpers.axesHelper,

  );

}

initScene();
