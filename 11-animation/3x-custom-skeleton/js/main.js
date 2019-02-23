import createApp from './app.js';


import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import createSkeleton from './skeleton.js';

import createHelpers from './helpers.js';

import setupControls from './interactivity.js';


function initScene() {

  const app = createApp();
  app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();

  const skeleton = createSkeleton();

  const meshes = createMeshes( geometries, materials, skeleton );

  const helpers = createHelpers( meshes );

  setupControls( materials );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.skinnedMesh,

    helpers.skeletonHelper,

  );

}

initScene();
