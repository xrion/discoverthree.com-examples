import createApp from './app.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = createApp();

  app.init();

  app.renderer.toneMappingExposure = 1;
  // app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 10, 10, 10 );

  app.controls.rotateSpeed = 0.25;
  app.controls.zoomSpeed = 0.5;
  app.controls.enableDamping = true;
  app.controls.enablePan = false;

  app.start();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  setupAnimation( meshes );

  app.scene.add(

    meshes.spiral,

  );

}

initScene();
