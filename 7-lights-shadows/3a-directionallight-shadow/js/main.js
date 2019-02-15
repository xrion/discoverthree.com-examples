import {
  Color,
  PCFSoftShadowMap,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import createHelpers from './helpers.js';

import loadModels from './models.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = new App( {
    container: '#scene-container',
    renderer: {
      // physicallyCorrectLights: false,
    },
  } );

  app.init();

  app.renderer.toneMappingExposure = 0.4;
  app.renderer.shadowMap.enabled = true;
  app.renderer.shadowMap.autoUpdate = true;
  // app.renderer.shadowMap.type = PCFSoftShadowMap;

  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const helpers = createHelpers( lights );

  const models = await loadModels();

  setupAnimation( meshes, models );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.plinth,
    meshes.shapes,

    // ...models.horsesArray,

    helpers.shadowCameraHelper,

  );

}

initScene();
