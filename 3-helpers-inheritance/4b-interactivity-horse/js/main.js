import {
  Color,
  Fog,
} from './vendor/three/three.module.js';

import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import loadModels from './models.js';

import setupAnimation from './animation.js';

import setupControls from './interactivity.js';

async function initScene() {

  const app = createApp();
  app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const models = await loadModels();

  setupAnimation( models );
  setupControls( models );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.ground,

    models.horse,

  );

}

initScene();
