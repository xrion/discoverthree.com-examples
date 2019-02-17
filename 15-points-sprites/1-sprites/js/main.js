import App from './vendor/App.js';

import createLights from './lights.js';

import loadEnvironments from './environment.js';
import loadTextures from './textures.js';
import createMaterials from './materials.js';

import createSprites from './sprites.js';

import setupAnimation from './animation.js';

function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 0.25;
  app.camera.position.set( -20, 0, -20 );

  const environments = loadEnvironments();
  app.scene.background = environments.castle;

  app.start();

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
