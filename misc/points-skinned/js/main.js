import createApp from './app.js';

import createMaterials from './materials.js';
import createPoints from './points.js';

import loadEnvironment from './environment.js';

import loadModels from './models.js';

import setupGeometry from './geometries.js';
import setupAnimation from './animation.js';

async function initScene() {

  const app = createApp();
  app.start();

  const environments = loadEnvironment();
  app.scene.background = environments.sky;

  const materials = createMaterials();

  const models = await loadModels();

  const geometries = setupGeometry( models );

  const points = createPoints( geometries, materials, models );

  setupAnimation( points, models, app );

  app.scene.add(

    points.dancer,

  );

}

initScene();
