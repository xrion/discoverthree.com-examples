import createApp from './app.js';

import createCameraControls from './controls.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import loadModels from './models.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = createApp();

  createCameraControls( app );

  // some control types require you to point the camera after
  // they have been set up, others do it automatically
  app.camera.lookAt( 0, 0, 0 );

  app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const models = await loadModels();

  setupAnimation( meshes, models );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.plinth,
    meshes.shapes,

    ...models.horsesArray,

  );

}

initScene();
