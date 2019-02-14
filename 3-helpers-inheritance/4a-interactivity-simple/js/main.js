import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import createHelpers from './helpers.js';

import setupControls from './interactivity.js';

async function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 0.5;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 5, 10, 15 );

  // disable keys in the orbit controls so that we can use
  // them to control our box
  app.controls.enableKeys = false;

  app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const helpers = createHelpers();

  meshes.box.add( helpers.arrowHelper );

  setupControls( meshes.box );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.box,

  );

}

initScene();
