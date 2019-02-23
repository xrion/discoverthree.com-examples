import {
  Color,
  PCFSoftShadowMap,
} from './vendor/three/three.module.js';


import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import loadEnvironments from './environment.js';
import loadModels from './models.js';
import loadTextures from './textures.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = createApp();
  app.start();

  const environments = loadEnvironments();
  // app.scene.background = environments.castle;
  app.scene.background = new Color( 0xffffff );

  const lights = createLights();

  const geometries = createGeometries();

  const textures = loadTextures();
  const materials = createMaterials( textures, environments );
  const meshes = createMeshes( geometries, materials );

  const models = await loadModels( environments );

  setupAnimation( models, lights );

  app.scene.add(

    lights.ambient,
    lights.main,
    lights.main.target,
    lights.top,
    lights.top.target,
    lights.diffuse,
    lights.diffuse.target,

    meshes.floor,
    meshes.backWall,

    // models.dancer,

  );


}

initScene();
