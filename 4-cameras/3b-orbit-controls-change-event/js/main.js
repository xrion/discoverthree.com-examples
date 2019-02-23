import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import setupCameraControls from './controls.js';

async function initScene() {

  const app = createApp();

  setupCameraControls( app );

  // ! don't call app.start() !
  // we're not using a render loop here,
  // instead rendering one frame each time the controls
  // move the camera
  // app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.plinth,
    meshes.shapes,

  );

  // however, we do want to render one frame,
  // after adding everything to our scene
  // to prevent showing a black screen at the starts
  app.render();

}

initScene();
