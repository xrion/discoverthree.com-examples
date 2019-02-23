import createApp from './app.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';
import createHelpers from './helpers.js';

import loadModels from './models.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = createApp();

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 20 );

  app.start();

  const geometries = createGeometries();
  const materials = createMaterials();
  const meshes = createMeshes( geometries, materials );

  const helpers = createHelpers( meshes );

  const models = await loadModels( materials );

  setupAnimation( meshes, models, helpers );

  app.scene.add(

    meshes.shape,

    models.horse,

    helpers.vertexNormals,

  );

  console.log( 'Here\'s the sphere geometry you just created: ', geometries.sphere );
  console.log( '...and here\'s the geometry from the horse: ', models.horse.geometry );

}

initScene();
