import {
  Color,
  BasicShadowMap,
  PCFShadowMap,
  PCFSoftShadowMap,
} from './vendor/three/three.module.js';

import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import createHelpers from './helpers.js';

import loadModels from './models.js';

import setupControls from './interactivity.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = new App( {
    container: '#scene-container',
    showStats: true,
  } );

  app.init();

  app.renderer.shadowMap.enabled = true;
  app.renderer.shadowMap.type = BasicShadowMap;

  app.renderer.toneMappingExposure = 0.6;
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

  setupControls( lights, helpers, app );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.plinth,
    meshes.shapes,

    ...models.horsesArray,

    helpers.shadowCameraHelper,

  );

  // we'll wait a few milliseconds before logging these to make sure
  // that everything is set up correctly
  setTimeout( () => {

    console.log( 'Here\'s the SpotLight: ', lights.main );
    console.log( 'Here\'s its shadow: ', lights.main.shadow );
    console.log( 'Here\'s the camera used to draw the shadow: ', lights.main.shadow.camera );
    console.log( '..and here\'s the render target the shadow is drawn onto: ', lights.main.shadow.map );

  }, 500 );

}

initScene();
