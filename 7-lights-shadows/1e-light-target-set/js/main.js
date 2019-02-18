import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import createHelpers from './helpers.js';

import loadModels from './models.js';

import setupControls from './interactivity.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 0.7;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -35, 30, -35 );

  app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const helpers = createHelpers( lights );

  const models = await loadModels();

  setupAnimation( models );

  setupControls( app, lights, helpers );

  app.scene.add(

    // lights.ambient,

    lights.main,

    meshes.plinth,

    models.duck,
    models.horse,
    models.head,

    helpers.spotLightHelper,

  );

}

initScene();
