import createApp from './app.js';

import createLights from './lights.js';

import setupTextures from './textures.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

function initScene() {

  const app = createApp();

  app.init();

  app.renderer.toneMappingExposure = 0.4;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 4, 4, 8 );

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const geometries = createGeometries();

  const textures = setupTextures();
  const materials = createMaterials( textures );

  const meshes = createMeshes( geometries, materials );

  app.scene.add(
    meshes.box,
    meshes.sphere,
  );


}

initScene();
