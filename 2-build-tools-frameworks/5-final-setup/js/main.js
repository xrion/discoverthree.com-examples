import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import loadModels from './models.js';
import loadTextures from './textures.js';

import setupAnimation from './animation.js';

async function initScene() {

  // Step 1: create your app

  const app = createApp();

  // Step 2: start the render loop
  // You usually want to do this as early as possible to make sure that
  // you users are not staring at a black screen!
  app.start();

  // Step 3: create or load thing you want to add
  // to your scene: lights, meshes, load models etc.

  const lights = createLights();

  const geometries = createGeometries();

  const textures = loadTextures();
  const materials = createMaterials( textures );
  const meshes = createMeshes( geometries, materials );

  const models = await loadModels( materials );

  // Step 4: setup animations
  setupAnimation( meshes, models );

  // Step 5: add everything to your scene
  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.box,

    models.parrot,
    models.flamingo,
    models.stork,

  );

  // Step 6: Sit back and enjoy your beautiful creation!

}

initScene();
