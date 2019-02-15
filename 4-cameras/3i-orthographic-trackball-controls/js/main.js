import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

import createCamera from './camera.js';
import createCameraControls from './controls.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import loadModels from './models.js';

import setupAnimation from './animation.js';


async function initScene() {

  const app = new App( {
    container: '#scene-container',
    controls: {
      // we don't want to setup the default OrbitControls here
      setupOrbitControls: false,
    },
  } );

  createCamera( app );

  app.init();

  app.renderer.toneMappingExposure = 0.4;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  createCameraControls( app );

  // some control types require you to point the camera after
  // they have been set up, others do it automatically
  app.camera.lookAt( 0, 0, 0 );

  app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const models = await loadModels();

  setupAnimation( meshes, models );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.plinth,
    meshes.shapes,

    ...models.horsesArray,

  );

}

initScene();
