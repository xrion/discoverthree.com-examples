import createApp from './app.js';

import createGeometries from './geometries.js';

import loadTextures from './textures.js';
import createMaterials from './materials.js';

import createPoints from './points.js';

import setupAnimation from './animation.js';

function initScene() {

  const app = createApp();
  app.start();

  const geometries = createGeometries();

  const textures = loadTextures();
  const materials = createMaterials( textures );

  const points = createPoints( geometries, materials );

  setupAnimation( points );

  app.scene.add( points.sphere );

}

initScene();
