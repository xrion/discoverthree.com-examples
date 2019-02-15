import App from './vendor/App.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import loadTextures from './textures.js';
import loadModels from './models.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.camera.position.set( 0, 0, 20 );

  app.start();

  const geometries = createGeometries();

  const textures = loadTextures();
  const materials = createMaterials( textures );
  const meshes = createMeshes( geometries, materials );

  const models = await loadModels();

  setupAnimation( models );

  app.scene.add(

    meshes.moon,

    models.parrot,

  );

}

initScene();
