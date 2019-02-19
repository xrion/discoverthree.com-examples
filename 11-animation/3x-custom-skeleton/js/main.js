import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';


import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import createSkeleton from './skeleton.js';

import createHelpers from './helpers.js';

import setupControls from './interactivity.js';


function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 10, 10, 15 );

  app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();

  const skeleton = createSkeleton();

  const meshes = createMeshes( geometries, materials, skeleton );

  const helpers = createHelpers( meshes );

  setupControls( materials );

  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.skinnedMesh,

    helpers.skeletonHelper,

  );

}

initScene();
