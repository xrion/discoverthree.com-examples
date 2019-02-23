import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = createApp();

  app.init();

  app.renderer.toneMappingExposure = 0.5;
  app.scene.background = new Color( 0x23485c );

  app.camera.position.set( 5, 5, 30 );
  app.controls.target.y = 1;

  app.start();

  const lights = createLights();

  const geometries = createGeometries();
  const materials = createMaterials();

  const meshes = createMeshes( geometries, materials );

  setupAnimation( meshes );

  app.scene.add(

    lights.ambient,
    lights.main,

    ...meshes.allMeshes,

  );

}

initScene();
