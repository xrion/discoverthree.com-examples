import {
  Color,
} from './vendor/three/three.module.js';

import {
  EffectComposer,
} from './vendor/three/postprocessing/EffectComposer.js';

import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import loadModels from './models.js';

import setupPostProcessing from './postProcessing.js';

import setupOnResize from './resize.js';

async function initScene() {

  const app = createApp();

  const composer = new EffectComposer( app.renderer );

  // overwrite the app's default render function to use the
  // EffectComposer instead
  app.render = () => {

    // render using the composer instead of the app.renderer
    composer.render();

  };

  setupPostProcessing( composer, app );

  setupOnResize( app, composer );

  app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const models = await loadModels();

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.box,

    models.parrot,

  );

}

initScene();
