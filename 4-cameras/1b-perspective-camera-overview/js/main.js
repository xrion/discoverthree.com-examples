import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import createHelpers from './helpers.js';

import setupControls from './interactivity.js';

import setupCameras from './cameras.js';
import setupOnResize from './resize.js';

async function initScene() {

  const app = createApp();
  app.start();

  const cameras = setupCameras( app );

  setupOnResize( app, cameras );

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();

  const meshes = createMeshes( geometries, materials );

  const helpers = createHelpers( app.camera );

  setupControls( app, cameras, helpers );

  app.scene.add(

    lights.ambient,
    lights.main,

    ...meshes.spheresArray,

    helpers.cameraHelper,

  );

}

initScene();
