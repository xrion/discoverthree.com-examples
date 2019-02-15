import App from './vendor/App.js';

import loadEnvironment from './environment.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createLights from './lights.js';
import createMeshes from './meshes.js';

import loadModels from './models.js';

import setupControls from './interactivity.js';

async function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 0.5;

  const environments = loadEnvironment();
  app.scene.background = environments.sky;
  app.camera.position.set( 2, 1, 1.5 );

  app.controls.autoRotate = true;
  app.controls.autoRotateSpeed = -0.2;

  app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials( environments );
  const meshes = createMeshes( geometries, materials );

  const models = await loadModels( materials );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.plinth,


    models.trumpet,

  );

  setupControls( app.renderer, lights, materials, environments );

}

initScene();
