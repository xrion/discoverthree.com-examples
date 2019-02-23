import createApp from './app.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';
import createHelpers from './helpers.js';

import setupControls from './interactivity.js';

function initScene() {

  const app = createApp();

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.camera.position.set( 0, 0, 10 );

  app.start();

  const geometries = createGeometries();

  const materials = createMaterials();

  const meshes = createMeshes( geometries, materials );

  const helpers = createHelpers( meshes );

  setupControls( materials );

  app.scene.add(

    meshes.leftQuad,
    meshes.rightQuad,

    helpers.vertexNormalsHelper,

  );

  console.log( 'Here\'s the non-ndexed BufferGeometry you just created: ', geometries.nonIndexed );
  console.log( '...and here\'s the indexed BufferGeometry you just created: ', geometries.indexed );


}

initScene();
