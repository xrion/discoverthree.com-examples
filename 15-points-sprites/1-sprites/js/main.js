import createApp from './app.js';

import createLights from './lights.js';

import loadEnvironments from './environment.js';
import loadTextures from './textures.js';
import createMaterials from './materials.js';

import createSprites from './sprites.js';

import setupAnimation from './animation.js';

function initScene() {

  const app = createApp();
  app.start();

  const environments = loadEnvironments();
  app.scene.background = environments.castle;

  const lights = createLights();

  const textures = loadTextures();
  const materials = createMaterials( textures );

  const sprites = createSprites( materials );

  setupAnimation( sprites );

  app.scene.add(

    lights.ambient,
    lights.main,

    sprites.leaves,

  );

}

initScene();
