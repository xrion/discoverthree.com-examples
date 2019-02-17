import {
  PCFSoftShadowMap,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import createHelpers from './helpers.js';

import loadEnvironment from './environment.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.shadowMap.enabled = true;
  app.renderer.shadowMap.type = PCFSoftShadowMap;
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

  // const helpers = createHelpers( lights );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.plinth,

    models.trumpet,

    // helpers.shadowCameraHelper,

  );

}

initScene();
